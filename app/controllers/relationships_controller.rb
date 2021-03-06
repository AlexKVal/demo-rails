class RelationshipsController < ApplicationController
  before_action :logged_in_user

  def create
    @user = User.find(params[:followed])
    current_user.follow(@user) unless current_user.following?(@user)
    redirect_back(fallback_location: @user)
    # TODO update Followers page via .js.erb
    # respond_to do |format|
    #   format.html { redirect_back(fallback_location: @user) }
    #   format.js   { render 'follow_unfollow' }
    # end
  end

  def destroy
    @user = Relationship.find(params[:id]).followed
    current_user.unfollow(@user) if @user
    redirect_back(fallback_location: @user)
    # respond_to do |format|
    #   format.html { redirect_back(fallback_location: @user) }
    #   format.js   { render 'follow_unfollow' }
    # end
  rescue ActiveRecord::RecordNotFound
    redirect_back(fallback_location: root_path)
  end
end
