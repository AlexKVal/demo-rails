require 'test_helper'

class UsersSignupTest < ActionDispatch::IntegrationTest
  include ActiveJob::TestHelper # because of UserMailer.deliver_later

  def setup
    ActionMailer::Base.deliveries.clear
  end

  test "invalid signup information with JS-disabled browser" do
    get root_path
    assert_template 'home/_signup_form'
    assert_no_difference 'User.count' do
      post signup_path, params: { user: {
        name: "John Dow",
        email: "invalid email",
        password: ""
      } }
    end
    assert_template 'users/new'
    assert_select '.user_email', class: 'has-error'
    assert_select '.user_password', class: 'has-error'
  end

  test "invalid signup information with Ajax" do
    get root_path
    assert_template 'home/_signup_form'
    assert_no_difference 'User.count' do
      post signup_path, xhr: true, params: { user: {
        name: "John Dow",
        email: "invalid email",
        password: ""
      } }
    end
    assert_template 'users/create'
    assert_equal "text/javascript", response.content_type
    unescaped_body = CGI.unescape_html(response.body)
    assert_match "is invalid", unescaped_body
    assert_match "can\'t be blank", unescaped_body
  end

  test "valid signup information with Ajax" do
    get root_path
    assert_template 'home/_signup_form'
    perform_enqueued_jobs do
      assert_difference 'User.count', +1 do
        post signup_path, xhr: true, params: { user: {
          name: "John Dow",
          email: "john@example.com",
          password: "foobar"
        } }
      end
      assert_equal "text/javascript", response.content_type
      assert_equal 1, ActionMailer::Base.deliveries.size
    end
  end

  test "valid signup information with account activation and JS-disabled browser" do
    get root_path
    assert_template 'home/_signup_form'
    perform_enqueued_jobs do
      assert_difference 'User.count', +1 do
        post signup_path, params: { user: {
          name: "John Dow",
          email: "john@example.com",
          password: "foobar"
        } }
      end
      assert_equal 1, ActionMailer::Base.deliveries.size
      user = assigns(:user)
      assert_not user.activated?
      assert_redirected_to welcome_path
      follow_redirect!
      assert flash.empty?
      assert_select '.email', 'john@example.com'

      # try to log in before activation
      get root_path
      assert_template 'home/_login_form'
      assert_not user.reload.activated?
      # (with wrong password)
      log_in_as(user, password: "wrong password")
      assert_not is_logged_in?
      assert_redirected_to root_path
      follow_redirect!
      assert_not flash.empty?
      # (with correct password)
      log_in_as(user, password: "foobar")
      assert_not is_logged_in?
      assert_redirected_to welcome_path
      follow_redirect!
      assert flash.empty?
      assert_select '.email', 'john@example.com'

      # invalid activation token
      get account_activate_path("invalid token", email: user.email)
      assert_not is_logged_in?
      # valid token, wrong email
      get account_activate_path(user.activation_token, email: 'wrong')
      assert_not is_logged_in?
      # valid activation token
      get account_activate_path(user.activation_token, email: user.email)
      assert user.reload.activated?
      assert_redirected_to root_path
      follow_redirect!
      assert_not flash.empty?
      assert is_logged_in?
      assert session[:data_email].nil? # clean up

      # login the activated user with correct password
      log_in_as(user, password: "foobar")
      assert is_logged_in?
      assert_redirected_to root_path
      follow_redirect!
      assert flash.empty?
      assert session[:data_email].nil? # clean up
    end
  end
end
