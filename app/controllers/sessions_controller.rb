class SessionsController < ApplicationController
  def new
  end

  def create
    @user = User.find_by(email: params[:session][:email].downcase)
    if @user&.authenticate(params[:session][:password])
      if @user.activated?
        log_in @user
        params[:session][:remember_me] == '1' ? remember(@user) : forget(@user)
        redirect_back_or root_path
      else
        message = "Account not activated. Check your email for the activation link."
        redirect_to root_path, warning: message
      end
    else
      session[:data_email] = params[:session][:email]
      redirect_to root_path, danger: "Incorrect email/password"
    end
  end

  def destroy
    log_out
    redirect_to root_path
  end
end
