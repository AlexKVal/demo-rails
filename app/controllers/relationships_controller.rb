class RelationshipsController < ApplicationController
  before_action :logged_in_user

  def create
    user = User.find(params[:followed_id])
    current_user.follow(user) unless current_user.following?(user)
    respond_to do |format|
      format.html { redirect_to user }
      format.js
    end
  end

  def destroy
    user = Relationship.find(params[:id]).followed
    current_user.unfollow(user) if user
    respond_to do |format|
      format.html { redirect_to user }
      format.js
    end
  rescue ActiveRecord::RecordNotFound
    redirect_back(fallback_location: root_path)
  end
end
