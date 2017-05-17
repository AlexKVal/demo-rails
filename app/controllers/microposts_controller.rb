class MicropostsController < ApplicationController
  before_action :logged_in_user, only: [:create, :destroy]

  # a quick and dirty hack for showing paginated microposts
  # TODO: DRY it with StaticPagesController#home
  def index
    if logged_in?
      @micropost  = current_user.microposts.build
      @feed_items = current_user.feed.page(params[:page])
    end
    render 'static_pages/home'
  end

  # POST /microposts
  def create
    @micropost = current_user.microposts.build(micropost_params)
    if @micropost.save
      redirect_to root_path, success: "Micropost published"
    else
      # @feed_items = []
      @feed_items = current_user.feed.page(params[:page])
      render 'static_pages/home'
    end
  end

  # DELETE /microposts/1
  def destroy
  end

  private

    def micropost_params
      params.require(:micropost).permit(:content)
    end
end
