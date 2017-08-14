class HomeController < ApplicationController
  expose :micropost, parent: :current_user

  def index
    if logged_in?
      @user       = current_user
      @feed_items = current_user.feed.page(params[:page])
    end
    @user ||= User.new
  end
end
