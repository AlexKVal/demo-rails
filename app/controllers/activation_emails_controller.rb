class ActivationEmailsController < ApplicationController
  def create
    @user = User.find_by(email: params[:email])

    if @user
      @user.send_activation_email
      redirect_to welcome_path, info: t('.success')
    else
      redirect_to root_path, danger: t('.no_user_with', email: params[:email])
    end
  end
end
