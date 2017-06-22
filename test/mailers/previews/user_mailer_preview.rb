# Preview all emails at http://lvh.me:5000/rails/mailers/user_mailer
class UserMailerPreview < ActionMailer::Preview

  def account_activation
    user = User.first
    UserMailer.account_activation(user, User.new_token)
  end

  def password_reset
    user = User.first
    UserMailer.password_reset(user, User.new_token)
  end

end
