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
    assert_select '.badge', @user.microposts.count.to_s
    assert_select 'div.pagination', count: 1
    @user.microposts.page(1).each do |micropost|
      assert_match micropost.content, response.body
    end
  end
end
