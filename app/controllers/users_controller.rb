class UsersController < ApplicationController
  before_action :set_user,       except: [:index, :new, :create, :send_activation_email_again]
  before_action :logged_in_user, only: [:edit, :update, :index, :destroy, :following, :followers,
                                        :follow, :unfollow]
  before_action :correct_user,   only: [:edit, :update]
  before_action :admin_user,     only: :destroy

  # GET /users
  def index
    @users = User.activated.ordered_by_id.page(params[:page])
  end

  # GET /users/1
  def show
    @microposts = @user.microposts.page(params[:page])
    redirect_to root_path unless @user.activated?
  end

  # GET /signup
  def new
    @user = User.new
  end

  # POST /signup
  def create
    @user = User.new(user_params)

    if @user.save
      @user.send_activation_email
      session[:data_email] = @user.email
      redirect_to welcome_path
    else
      respond_to do |format|
        format.html { render :new }
        format.js
      end
    end
  end

  # GET /users/1/edit
  def edit
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      redirect_to @user, success: t('.success')
    else
      render :edit
    end
  end

  def destroy
    @user.destroy
    redirect_to users_url, success: t('.success')
  end

  def following
    @users = @user.following.page(params[:page])
    render 'show_follow'
  end

  def followers
    @users = @user.followers.page(params[:page])
    render 'show_follow'
  end

  def send_activation_email_again
    return unless session[:data_email] # for a user trying to curl post

    @user = User.find_by(email: session[:data_email])

    if @user
      @user.send_activation_email
      redirect_to welcome_path, info: t('.success')
    else
      redirect_to root_path, danger: t('.no_user_with', email: session[:data_email])
    end
  end

  def follow
    current_user.follow(@user) unless current_user.following?(@user)
    respond_to do |format|
      format.js   { render 'follow_unfollow' }
      format.html { redirect_to @user }
    end
  end

  def unfollow
    current_user.unfollow(@user) if current_user.following?(@user)
    respond_to do |format|
      format.js   { render 'follow_unfollow' }
      format.html { redirect_to @user }
    end
  end

  private
    def set_user
      @user = User.find(params[:id])
    end

    # Use callbacks to share common setup or constraints between actions.
    def correct_user
      redirect_to(root_path) unless current_user?(@user)
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.require(:user).permit(:name, :email, :password, :password_confirmation)
    end

    # confirms an admin user
    def admin_user
      redirect_to(root_path) unless current_user.admin?
    end
end
