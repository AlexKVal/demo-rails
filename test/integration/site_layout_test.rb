require 'test_helper'

class SiteLayoutTest < ActionDispatch::IntegrationTest
  test "layout links" do
    get root_path
    assert_template 'static_pages/home'
    assert_select "a[href=?]", root_path, count: 2
    assert_select "a[href=?]", help_path
    assert_select "a[href=?]", about_path
    assert_select "a[href=?]", contact_path
  end

  test "home page contains a Sign Up button" do
    get root_path
    assert_select "a[href=?]", signup_path, "Sign up now!"
  end

  test "when logged in home page contains link to users#index page" do
    get root_path
    assert_select "a[href=?]", users_path, count: 0

    user = users(:michael)
    log_in_as(user)
    get root_path
    assert_select "a[href=?]", users_path, count: 1
  end
end
