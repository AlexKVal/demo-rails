module Admin
  class FeedController < ApplicationController

    expose(:microposts) { Micropost.includes(:user).limit(10) }

    def index
      respond_to do |format|
        format.html {
          @init = render_to_string transit: init_data
        }
        # format.transit { render transit: full_data }
      end
    end

    private

    def build_user(user)
      { :id => user.id,
        :name => user.name,
        :email => user.email }
    end

    def build_micropost(post)
      { :id => post.id,
        :content => post.content,
        :user => build_user(post.user)}
    end

    def init_data
      { :microposts => microposts.map {|m| build_micropost(m)} }
    end
  end
end
