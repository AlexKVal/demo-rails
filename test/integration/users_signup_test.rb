require 'test_helper'

class UsersSignupTest < ActionDispatch::IntegrationTest
  def setup
    ActionMailer::Base.deliveries.clear
  end

  test "invalid signup information with JS-disabled browser" do
    get root_path
    assert_template 'shared/_signup_form'
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

  test "invalid signup information with Ajax" do
    get root_path
    assert_template 'shared/_signup_form'
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
    assert_match "Email is invalid", unescaped_body
    assert_match "Password can\'t be blank", unescaped_body
  end

  test "valid signup information with Ajax" do
    get root_path
    assert_template 'shared/_signup_form'
    assert_difference 'User.count', +1 do
      post signup_path, xhr: true, params: { user: {
        name: "John Dow",
        email: "john@example.com",
        password: "foobar"
      } }
    end
    assert_not flash.empty?
    assert_equal "text/javascript", response.content_type
    assert_equal 1, ActionMailer::Base.deliveries.size
  end

  test "valid signup information with account activation and JS-disabled browser" do
    get root_path
    assert_template 'shared/_signup_form'
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
    assert_redirected_to root_path
    follow_redirect!
    assert_not flash.empty?
    # try to log in before activation
    log_in_as(user)
    assert_not is_logged_in?
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
  end
end
