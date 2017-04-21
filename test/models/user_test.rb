require 'test_helper'

class UserTest < ActiveSupport::TestCase
  setup do
    @user = User.new name: "Vasya", email: "some@example.com"
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
end
