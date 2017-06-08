require 'test_helper'

class UsersLoginTest < ActionDispatch::IntegrationTest
  def setup
    @user = users(:michael)
  end

  test "login form remembers previously entered values" do
    some_email = 'some@email.com'
    post login_path, params: { session: { email: some_email, password: '' } }
    follow_redirect!
    assert_select '#session_email[value=?]', some_email
  end

  test "login with invalid information" do
    get root_path
    assert_template 'home/_login_form'

    post login_path, params: { session: { email: 'invalid', password: 'invalid' } }
    assert_redirected_to root_path
    follow_redirect!
    assert_template 'home/_login_form'
    assert_match /incorrect/i, flash[:danger]

    get root_path
    assert flash.empty?
  end

  test "login with valid information followed by logout" do
    get root_path
    assert_template 'home/_login_form'

    post login_path, params: { session: { email: @user.email, password: 'password' } }
    assert is_logged_in?
    assert_redirected_to root_path
    follow_redirect!
    assert_select "a[href=?]", logout_path
    assert_select "a[href=?]", user_path(@user)

    # logout
    delete logout_path
    assert_not is_logged_in?
    assert_redirected_to root_path
    # simulate a user clicking logout in a a second window
    delete logout_path
    # continue in our "previous" window
    follow_redirect!
    assert_select "a[href=?]", logout_path, count: 0
    assert_select "a[href=?]", user_path(@user), count: 0
  end

  test "login with remembering" do
    log_in_as(@user, remember_me: '1')
    assert_not_empty cookies['remember_token']
    assert_equal @user.id, assigns(:user).id
  end

  test "login without remembering" do
    # Log in to set the cookie
    log_in_as(@user, remember_me: '1')
    # Log in again and verify that the cookie is deleted
    log_in_as(@user, remember_me: '0')
    assert_empty cookies['remember_token']
  end
end
