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

    assert_response :success
    assert_template 'users/new'
    assert_select '#error_explanation .alert', 'The form contains 3 errors.'
  end
end
