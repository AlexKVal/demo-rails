require 'test_helper'

class StaticPagesControllerTest < ActionDispatch::IntegrationTest
  test "should get help" do
    get help_url
    assert_response :success
    assert_select "title", "Help | #{Rails.configuration.app_name}"
  end

  test "should get about" do
    get about_url
    assert_response :success
    assert_select "title", "About | #{Rails.configuration.app_name}"
  end

  test "should get contact" do
    get contact_url
    assert_response :success
    assert_select "title", "Contact | #{Rails.configuration.app_name}"
  end

  test "should get welcome" do
    get welcome_url
    assert_response :success
    assert_select "title", "Welcome | #{Rails.configuration.app_name}"
  end
end
