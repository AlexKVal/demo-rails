class MicropostsController < ApplicationController
  before_action :logged_in_user, only: [:create, :destroy]

  # POST /microposts
  def create
    @micropost = current_user.microposts.build(micropost_params)
    if @micropost.save
      redirect_to root_path, success: "Micropost published"
    else
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
