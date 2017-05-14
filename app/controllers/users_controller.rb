class UsersController < ApplicationController
  before_action :set_user,       except: [:index, :new, :create]
  before_action :logged_in_user, only: [:edit, :update, :index, :destroy]
  before_action :correct_user,   only: [:edit, :update]
  before_action :admin_user,     only: :destroy

  # GET /users
  def index
    @users = User.where(activated: true).page(params[:page])
  end

  # GET /users/1
  def show
    redirect_to root_url unless @user.activated?
  end

  # GET /users/new
  def new
    @user = User.new
  end

  # GET /users/1/edit
  def edit
  end

  def create
    @user = User.new(user_params)

    if @user.save
      @user.send_activation_email
      redirect_to root_url, info: "Please check your email to activate your account."
    else
      render :new
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      redirect_to @user, success: 'Profile updated'
    else
      render :edit
    end
  end

  def destroy
    @user.destroy
    redirect_to users_url, success: "User deleted"
  end

  private
    def set_user
      @user = User.find(params[:id])
    end

    # Use callbacks to share common setup or constraints between actions.
    def correct_user
      redirect_to(root_url) unless current_user?(@user)
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.require(:user).permit(:name, :email, :password, :password_confirmation)
    end

    # Confirms a logged-in user.
    def logged_in_user
      unless logged_in?
        store_location
        redirect_to login_url, danger: 'Please log in.'
      end
    end

    # confirms an admin user
    def admin_user
      redirect_to(root_url) unless current_user.admin?
    end
end
