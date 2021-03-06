class SessionsController < ApplicationController
  def new
  end

  def create
    @user = User.find_by(email: params[:session][:email].downcase)
    if @user&.authenticate(params[:session][:password])
      if @user.activated?
        log_in @user
        params[:session][:remember_me] == '1' ? remember(@user) : forget(@user)
        session.delete(:data_email)
        redirect_back_or root_path
      else
        session[:data_email] = @user.email
        redirect_to welcome_path
      end
    else
      session[:data_email] = params[:session][:email]
      redirect_to root_path, danger: t('.incorrect')
    end
  end

  def destroy
    log_out
    redirect_to root_path
  end
end
