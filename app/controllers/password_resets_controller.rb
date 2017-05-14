class PasswordResetsController < ApplicationController
  before_action :get_user,         only: [:edit, :update]
  before_action :valid_user,       only: [:edit, :update]
  before_action :check_expiration, only: [:edit, :update]

  def new
  end

  def create
    @user = User.find_by(email: params[:password_reset][:email].downcase)
    if @user
      @user.create_reset_digest
      @user.send_password_reset_email
      redirect_to root_url, info: "Email sent with password reset instructions"
    else
      flash.now[:danger] = "Email address not found"
      render :new
    end
  end

  def edit
  end

  def update
    if params[:user][:password].empty?
      @user.errors.add(:password, "can't be empty")
      render :edit
    elsif @user.update(user_params)
      log_in @user
      redirect_to @user, success: "Password has been reset."
    else
      render :edit
    end
  end

  private

    def user_params
      params.require(:user).permit(:password, :password_confirmation)
    end

    def get_user
      @user = User.find_by(email: params[:email])
    end

    # confirms a valid user
    def valid_user
      redirect_to root_url unless @user&.activated? && @user.authenticated?(:reset, params[:id])
    end

    # checks expiration of reset token
    def check_expiration
      if @user.password_reset_expired?
        redirect_to new_password_reset_path, danger: "Password reset has expired."
      end
    end
end