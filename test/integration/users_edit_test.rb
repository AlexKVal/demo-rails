require 'test_helper'

class UsersEditTest < ActionDispatch::IntegrationTest
  def setup
    @user = users(:michael)
  end

  test "unsuccessful edit" do
    log_in_as(@user)
    get edit_user_path(@user)
    assert_template 'users/edit'

    patch user_path(@user), params: { user: {
      name: '',
      email: 'foo@invalid',
      password: 'foo',
      password_confirmation: 'bar'
    } }
    assert_template 'users/edit'
    assert_select '.user_name > .help-block', "can't be blank"
    assert_select '.user_email > .help-block', "is invalid"
    assert_select '.user_password > .help-block', "is too short (minimum is 6 characters)"
    assert_select '.user_password_confirmation > .help-block', "doesn't match Password"
  end

  test "successful edit with friendly forwarding" do
    get edit_user_path(@user)
    assert_equal edit_user_url(@user), session[:forwarding_url]
    log_in_as(@user)
    assert_redirected_to edit_user_path(@user)
    assert_not session[:forwarding_url]

    name = "Foo Bar"
    email = 'foo@bar.com'
    patch user_path(@user), params: { user: {
      name: name,
      email: email,
      password: '',
      password_confirmation: ''
    } }
    assert_not flash.empty?
    assert_redirected_to @user

    @user.reload
    assert_equal name, @user.name
    assert_equal email, @user.email
  end
end
