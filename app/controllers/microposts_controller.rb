class MicropostsController < ApplicationController
  before_action :logged_in_user
  before_action :correct_user, only: [:destroy]

  # POST /microposts
  def create
    @micropost = current_user.microposts.build(micropost_params)
    if @micropost.save
      redirect_to root_path, success: "Micropost published"
    else
      respond_to do |format|
        format.js # create.js.erb
        format.html do
          flash[:danger] = @micropost.errors.map{|k, v| "#{k} #{v}"}.join(', ')
          redirect_to root_path(page: params[:page])
        end
      end
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
