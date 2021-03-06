require 'test_helper'

class UsersProfileTest < ActionDispatch::IntegrationTest
  def setup
    @user = users(:michael)
    @other_user = users(:archer)
  end

  test "profile display" do
    get user_path(@user)
    assert_template 'users/show'
    assert_select '.panel-title img.gravatar'
    assert_select '.panel-title', text: @user.name
    assert_not @user.following.empty?
    assert_not @user.followers.empty?
    assert_select '#following', "2" # text: @user.following.count.to_s
    assert_select '#followers', "1" # text: @user.followers.count.to_s
    assert_select '.panel-title .badge', text: @user.microposts_count.to_s
    assert_select '.pagination', count: 1
    @user.microposts.page(1).each do |micropost|
      assert_match micropost.content, response.body
    end
  end

  test "current user stats should be shown on the root page" do
    log_in_as(@user)
    get root_path
    assert_select '.panel-title', text: /#{@user.name}/
    assert_not @user.following.empty?
    assert_not @user.followers.empty?
    assert_select '#following', "2" # text: @user.following.count.to_s
    assert_select '#followers', "1" # text: @user.followers.count.to_s
  end

  test "when is not logged-in (edit) should not be shown on a user profile" do
    get user_path(@user)
    assert_select '.panel-title', text: /\(edit\)/, count: 0
    get user_path(@other_user)
    assert_select '.panel-title', text: /\(edit\)/, count: 0
  end

  test "when looking at own user's profile (edit) should be shown" do
    log_in_as(@user)
    get user_path(@user)
    assert_select '.panel-title', text: /\(edit\)/
  end

  test "when looking at another user's profile (edit) shouldn't be showed" do
    log_in_as(@user)
    get user_path(@other_user)
    assert_select '.panel-title', text: /\(edit\)/, count: 0
  end
end
