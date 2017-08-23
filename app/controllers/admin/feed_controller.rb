module Admin
  class FeedController < ApplicationController

    expose(:microposts) { Micropost.includes(:user).limit(10) }

    def index
      respond_to do |format|
        format.html # initial data now render in the template: render "feed_init_data"
        # format.transit { render transit: full_data }
      end
    end
  end
end
