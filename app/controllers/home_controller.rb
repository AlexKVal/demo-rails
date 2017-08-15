class HomeController < ApplicationController
  def index
    if logged_in?
      @user       = current_user
      @micropost  = current_user.microposts.build
      @feed_items = current_user.feed.page(params[:page])
    end
    @user ||= User.new
  end
end
