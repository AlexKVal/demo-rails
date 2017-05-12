require 'test_helper'

class UsersSignupTest < ActionDispatch::IntegrationTest
  test "when the submitted information is invalid" do
    get signup_path
    assert_response :success

    assert_no_difference 'User.count' do
      post signup_path, params: {
        user: {
          name: "John Dow",
          email: "invalid email",
          password: ""
        }
      }
    end

    assert_template 'users/new'
    assert_select '#error_explanation .alert', 'The form contains 2 errors.'
  end

  test "when the submitted information is correct" do
    get signup_path
    assert_response :success

    assert_difference 'User.count', +1 do
      post signup_path, params: {
        user: {
          name: "John Dow",
          email: "john@example.com",
          password: "foobar",
          password_confirmation: "foobar"
        }
      }
    end

    assert_response :redirect
    follow_redirect!
    assert_template 'users/show'

    # assert_select '.alert-success', 'Welcome to the Sample App!' # <= brittle
    assert_not flash.empty?

    assert_select '.panel-title', 'John Dow'
    assert is_logged_in?
  end
end
