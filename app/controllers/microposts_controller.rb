class MicropostsController < ApplicationController
  before_action :logged_in_user, only: [:create, :destroy]

  # POST /microposts
  def create
  end

  # DELETE /microposts/1
  def destroy
  end
end
