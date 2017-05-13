require 'test_helper'

class UsersSignupTest < ActionDispatch::IntegrationTest
  def setup
    ActionMailer::Base.deliveries.clear
  end

  test "when the submitted information is invalid" do
    get signup_path
    assert_no_difference 'User.count' do
      post signup_path, params: { user: {
        name: "John Dow",
        email: "invalid email",
        password: ""
      } }
    end
    assert_template 'users/new'
    assert_select '#error_explanation .alert', 'The form contains 2 errors.'
  end

  test "valid signup information with account activation" do
    get signup_path
    assert_difference 'User.count', +1 do
      post signup_path, params: { user: {
        name: "John Dow",
        email: "john@example.com",
        password: "foobar",
        password_confirmation: "foobar"
      } }
    end
    assert_equal 1, ActionMailer::Base.deliveries.size
    user = assigns(:user)
    assert_not user.activated?
    # try to log in before activation
    log_in_as(user)
    assert_not is_logged_in?
    # invalid activation token
    get edit_account_activation_path("invalid token", email: user.email)
    assert_not is_logged_in?
    # valid token, wrong email
    get edit_account_activation_path(user.activation_token, email: 'wrong')
    assert_not is_logged_in?
    # valid activation token
    get edit_account_activation_path(user.activation_token, email: user.email)
    assert user.reload.activated?
    follow_redirect!
    assert_template 'users/show'
    assert_not flash.empty?
    assert is_logged_in?
  end
end
