require 'test_helper'

class MicropostTest < ActiveSupport::TestCase
  def setup
    @user = users(:michael)
    @micropost = @user.microposts.build(content: "Lorem ipsum")
  end

  test "should be valid" do
    assert @micropost.valid?
  end

  test "user id should be present" do
    @micropost.user_id = nil
    assert_not @micropost.valid?
  end

  test "content should be present" do
    @micropost.content = "   "
    assert_not @micropost.valid?
  end

  test "content should be at most 140 characters" do
    @micropost.content = "a" * 141
    assert_not @micropost.valid?
  end

  test "order should be the most recent first" do
    # I cannot use fixture generated ids here (default behaviour)
    # I'm checking that order: {id: :desc} works for my next_id() custom plsql function
    # clean up microposts
    microposts = @user.microposts
    microposts.delete_all
    assert_empty microposts
    # add some manually to the db
    microposts.create(content: 'some-oldest', created_at: 1.day.ago)
    microposts.create(content: 'some-middle', created_at: 1.minute.ago)
    microposts.create(content: 'some-newest')
    # check to see that next_id() and default_scope work as expected
    assert_equal microposts.order(created_at: :desc).first, microposts.order(id: :desc).first
  end
end
