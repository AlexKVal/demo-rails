class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by(email: params[:session][:email].downcase)
    if user&.authenticate(params[:session][:password])
      render text: 'OK'
    else
      flash.now[:danger] = "Incorrect email/password"
      render 'new'
    end
  end

  def destroy
    #code
  end
end
