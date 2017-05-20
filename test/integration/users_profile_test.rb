require 'test_helper'

class UsersProfileTest < ActionDispatch::IntegrationTest
  def setup
    @user = users(:michael)
  end

  test "profile display" do
    get user_path(@user)
    assert_template 'users/show'
    assert_select '.panel-title img.gravatar'
    assert_select '.panel-title', text: @user.name
    assert_select '#following', "2" # text: @user.following.count.to_s
    assert_select '#followers', "1" # text: @user.followers.count.to_s
    assert_select '.panel-title .badge', text: @user.microposts.count.to_s
    assert_select '.pagination', count: 1
    @user.microposts.page(1).each do |micropost|
      assert_match micropost.content, response.body
    end
  end
end
