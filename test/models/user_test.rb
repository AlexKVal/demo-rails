require 'test_helper'

class UserTest < ActiveSupport::TestCase
  setup do
    @user = User.new name: "Vasya", email: "some@example.com", password: "foobar"
  end

  test "user is valid" do
    assert @user.valid?
  end

  test "name should be present" do
    @user.name = "     "
    assert @user.invalid?
  end

  test "email should be present" do
    @user.email = "    "
    assert @user.invalid?
  end

  test "name should not be too long" do
    @user.name = "a" * 51
    assert @user.invalid?
  end

  test "email should not be too long" do
    @user.email = "a" * 244 + "@example.com"
    assert @user.invalid?
  end

  test "email validation should accept valid addresses" do
    valid_addresses = %w[
      user@example.com
      USER@foo.COM
      A_US-ER@foo.bar.org
      first.last@foo.jp
      alice+bob@baz.cn
    ]
    valid_addresses.each do |valid_address|
      @user.email = valid_address
      assert @user.valid?, "#{valid_address.inspect} should be valid"
    end
  end

  test "email validation should reject invalid addresses" do
    invalid_addresses = %w[
      user@example,com
      user_at_foo.org
      user.name@example.
      foo@bar_baz.com
      foo@bar+baz.com
      foo@bar..com
    ]
    invalid_addresses.each do |invalid_address|
      @user.email = invalid_address
      assert @user.invalid?, "#{invalid_address.inspect} should be invalid"
    end
  end

  test "email addresses should be unique" do
    duplicate_user = @user.dup
    duplicate_user.email = @user.email.upcase
    @user.save
    assert duplicate_user.invalid?
  end

  test "email addresses should be downcased" do
    MIXED_CASE_EMAIL = 'NotDowncased@FOO.bar'

    @user.email = MIXED_CASE_EMAIL
    @user.save
    assert_equal MIXED_CASE_EMAIL.downcase, @user.reload.email
  end

  test "password should be present (nonblank)" do
    @user.password = @user.password_confirmation = " " * 6
    assert @user.invalid?
  end

  test "password should have a minimum length" do
    @user.password = @user.password_confirmation = "a" * 5
    assert @user.invalid?
  end

  test "authenticated? should return false for a user with nil digest" do
    assert_not @user.authenticated?(:remember, '')
  end

  test "associated microposts should be destroyed" do
    @user.save
    @user.microposts.create!(content: "Lorem ipsum")
    assert_difference 'Micropost.count', -1 do
      @user.destroy
    end
  end

  test "associated active_relationships should be destroyed" do
    other_user = users(:archer)
    @user.save
    assert_difference 'Relationship.count', +1 do
      @user.follow(other_user)
    end
    assert_difference 'Relationship.count', -1 do
      @user.destroy
    end
  end

  test "associated passive_relationships should be destroyed" do
    other_user = users(:archer)
    @user.save
    assert_difference 'Relationship.count', +1 do
      other_user.follow(@user)
    end
    assert_difference 'Relationship.count', -1 do
      @user.destroy
    end
  end

  test "should follow and unfollow a user" do
    michael = users(:michael)
    malory  = users(:malory)
    assert michael.following?(malory)
    assert malory.followers.include?(michael)
    michael.unfollow(malory)
    assert_not michael.following?(malory)
    michael.follow(malory)
    assert michael.following?(malory)
    assert malory.followers.include?(michael)
  end

  test "feed should have the right posts" do
    michael = users(:michael)
    archer  = users(:archer)
    lana    = users(:lana)
    assert_not michael.feed.empty?
    # posts from followed user
    assert_not lana.microposts.empty?
    assert_equal lana.microposts.count, lana.microposts_count
    lana.microposts.each do |post_following|
      assert michael.feed.include?(post_following)
    end
    # posts from self
    assert_not michael.microposts.empty?
    assert_equal michael.microposts.count, michael.microposts_count
    michael.microposts.each do |post_self|
      assert michael.feed.include?(post_self)
    end
    # posts from unfollowed user
    assert_not archer.microposts.empty?
    assert_equal archer.microposts.count, archer.microposts_count
    archer.microposts.each do |post_unfollowed|
      assert_not michael.feed.include?(post_unfollowed)
    end
  end
end
