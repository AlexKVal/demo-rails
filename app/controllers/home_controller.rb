class HomeController < ApplicationController
  def index
    if logged_in?
      @micropost  = current_user.microposts.build
      @feed_items = current_user.feed.page(params[:page])
    end
  end
end