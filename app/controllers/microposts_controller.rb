class MicropostsController < ApplicationController
  before_action :logged_in_user, only: [:create, :destroy]
  before_action :correct_user,   only: [:destroy]

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
      @feed_items = current_user.feed.page(params[:page])
      render 'home/index'
    end
  end

  # DELETE /microposts/1
  def destroy
    @micropost.destroy
    redirect_back fallback_location: root_path, success: "Micropost deleted"
  end

  private

    def micropost_params
      params.require(:micropost).permit(:content, :picture)
    end

    def correct_user
      @micropost = current_user.microposts.find_by(id: params[:id])
      redirect_to root_path if @micropost.nil?
    end
end
