require 'test_helper'

class FollowingTest < ActionDispatch::IntegrationTest
  def setup
    @user = users(:michael)
    log_in_as(@user)
  end

  test "following page" do
    get following_user_path(@user)
    assert_not @user.following.empty?
    assert_select '#following', text: @user.following.count.to_s
    @user.following.each do |user|
      assert_select "a[href=?]", user_path(user)
    end
  end

  test "followers page" do
    get followers_user_path(@user)
    assert_not @user.followers.empty?
    assert_select '#followers', text: @user.followers.count.to_s
    @user.followers.each do |user|
      assert_select "a[href=?]", user_path(user)
    end
  end
end
