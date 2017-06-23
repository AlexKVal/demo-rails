class AccountActivationsController < ApplicationController
  def edit
    user = User.find_by(email: params[:email])
    if user && !user.activated? && user.authenticated?(:activation, params[:id])
      user.activate
      log_in user
      session.delete(:data_email)
      redirect_to root_path, success: t('.success')
    else
      redirect_to root_path, danger: t('.invalid_link')
    end
  end
end
