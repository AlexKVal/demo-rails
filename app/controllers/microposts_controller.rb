class MicropostsController < ApplicationController
  before_action :logged_in_user

  expose :micropost, parent: :current_user

  # POST /microposts
  def create
    if micropost.save
      redirect_to root_path, success: t('.success')
    else
      respond_to do |format|
        format.js # create.js.erb
        format.html do
          flash[:danger] = micropost.errors.map{|k, v| "#{k} #{v}"}.join(', ')
          redirect_to root_path(page: params[:page])
        end
      end
    end
  end

  # DELETE /microposts/1
  def destroy
    micropost.destroy
  rescue ActiveRecord::RecordNotFound # current user can delete only their posts
    redirect_to root_path
  else
    redirect_back fallback_location: root_path, success: "Micropost deleted"
  end

  private

    def micropost_params
      params.require(:micropost).permit(:content, :picture)
    end
end
