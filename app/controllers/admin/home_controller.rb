module Admin
  class HomeController < ApplicationController
    expose(:users) { User.ordered_by_id }

    def index
      @users = User.ordered_by_id
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
        :email => user.email,
        :"microposts-count" => user.microposts_count }
    end

    def init_data
      { :users => users.map {|u| build_user(u)} }
    end
  end
end
