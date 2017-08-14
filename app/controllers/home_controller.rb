class HomeController < ApplicationController
  def index
    if logged_in?
      @user       = current_user
      @feed_items = current_user.feed.page(params[:page])
    end
    @user ||= User.new
  end

  def micropost
    @micropost_cached ||= logged_in? && current_user.microposts.build
  end
  helper_method :micropost
end
