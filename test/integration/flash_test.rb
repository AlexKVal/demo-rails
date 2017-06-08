require 'test_helper'

class FlashTestController < ApplicationController
  def set_flash
    flash[params[:message_type]] = 'this is a message'
    render partial: 'application/flash'
  end
end

class FlashTest < ActionDispatch::IntegrationTest
  setup do
    @controller = FlashTestController.new

    Rails.application.routes.draw do
      # Using a dynamic :action segment in a route is deprecated and will be removed in Rails 5.2
      ActiveSupport::Deprecation.silence do
        get ":action", to: FlashTestController
      end
    end
  end

  teardown do
    Rails.application.reload_routes!
  end

  test "flash messages are shown in the .alert-<message_type> div" do
    get "/set_flash", params: { message_type: :danger }
    assert_select '.alert-danger', 'this is a message'

    get "/set_flash", params: { message_type: :info }
    assert_select '.alert-info', 'this is a message'

    get "/set_flash", params: { message_type: :default }
    assert_select '.alert-default', 'this is a message'
  end

  test "flash messages with 'data_*' keys are not shown" do
    get "/set_flash", params: { message_type: :data_email }
    assert_equal 'this is a message', request.flash[:data_email]
    assert_empty response.body
  end
end
