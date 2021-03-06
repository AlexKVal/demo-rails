require 'test_helper'

class PasswordResetsTest < ActionDispatch::IntegrationTest
  include ActiveJob::TestHelper # because of UserMailer.deliver_later

  def setup
    ActionMailer::Base.deliveries.clear
    @user = users(:michael)
  end

  test "password resets" do
    get new_password_reset_path
    assert_template 'password_resets/new'

    # invalid email
    perform_enqueued_jobs do
      post password_resets_path, params: { password_reset: { email: '' } }
      assert_not flash.empty?
      assert_template 'password_resets/new'
    end

    # valid email
    perform_enqueued_jobs do
      post password_resets_path, params: { password_reset: { email: @user.email } }
      assert_not_equal @user.reset_digest, @user.reload.reset_digest
      assert_equal 1, ActionMailer::Base.deliveries.size
      assert_not flash.empty?
      assert_redirected_to root_path
      # password reset form
      user = assigns(:user)
      # wrong email
      get reset_password_path(user.reset_token, email: '')
      assert_redirected_to root_path
      # inactive user
      user.toggle!(:activated)
      get reset_password_path(user.reset_token, email: user.email)
      assert_redirected_to root_path
      user.toggle!(:activated) # activate it back
      # right email, right token
      get reset_password_path(user.reset_token, email: user.email)
      assert_template 'password_resets/edit'
      assert_select 'input[name=email][type=hidden][value=?]', user.email
      # invalid confirmation
      patch password_reset_path(user.reset_token), params: {
        email: user.email,
        user: { password: 'foobaz', password_confirmation: 'barbaz' }
      }
      assert_select '.user_password_confirmation', class: 'has-error'
      # empty password
      patch password_reset_path(user.reset_token), params: {
        email: user.email,
        user: { password: '', password_confirmation: '' }
      }
      assert_select '.user_password', class: 'has-error'
      assert_select '.user_password_confirmation', class: 'has-error'
      # valid password & confirmation
      patch password_reset_path(user.reset_token), params: {
        email: user.email,
        user: { password: 'new-password', password_confirmation: 'new-password' }
      }
      assert is_logged_in?
      assert_not flash.empty?
      assert_redirected_to user
      assert_nil user.reload.reset_digest # assure that the password reset link cannot be used twice
    end
  end

  test "expired token" do
    get new_password_reset_path
    post password_resets_path, params: { password_reset: { email: @user.email } }

    user = assigns(:user)
    user.update_attribute(:reset_sent_at, 3.hours.ago)
    patch password_reset_path(user.reset_token), params: {
      email: user.email,
      user: { password: 'new-password', password_confirmation: 'new-password' }
    }
    assert_response :redirect
    follow_redirect!
    assert_match /Password reset has expired/i, response.body
  end
end
