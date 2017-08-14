class MicropostsController < ApplicationController
  before_action :logged_in_user

  def current_user_microposts
    current_user.microposts
  end

  def micropost
    @micropost_cache ||= \
      if params[:id]
        current_user_microposts.find_by(id: params[:id])
      else
        current_user_microposts.build(micropost_params)
      end
  end
  helper_method :micropost

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
  # current user can delete only their posts
  def destroy
    if micropost.nil?
      redirect_to root_path
    else
      micropost.destroy
      redirect_back fallback_location: root_path, success: "Micropost deleted"
    end
  end

  private

    def micropost_params
      params.require(:micropost).permit(:content, :picture)
    end
end
