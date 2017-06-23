class PasswordResetsController < ApplicationController
  before_action :get_user,         only: [:edit, :update]
  before_action :valid_user,       only: [:edit, :update]
  before_action :check_expiration, only: [:edit, :update]

  def new
  end

  def create
    @user = User.find_by(email: params[:password_reset][:email].downcase)
    if @user
      @user.send_password_reset_email
      redirect_to root_path, info: t('.email_sent')
    else
      flash.now[:danger] = t('.email_not_found')
      render :new
    end
  end

  def edit
  end

  def update
    if params[:user][:password].empty?
      @user.errors.add(:password, t('errors.messages.blank'))
      render :edit
    elsif @user.update(user_params)
      log_in @user
      @user.update_attribute(:reset_digest, nil)
      redirect_to @user, success: t('.success')
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
      redirect_to root_path unless @user&.activated? && @user.authenticated?(:reset, params[:id])
    end

    # checks expiration of reset token
    def check_expiration
      if @user.password_reset_expired?
        redirect_to new_password_reset_path, danger: t('.expired')
      end
    end
end
