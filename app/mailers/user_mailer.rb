class UserMailer < ApplicationMailer

  def account_activation(user)
    @user = user
    mail to: user.email, subject: 'Please verify your email address'
  end

  def password_reset(user)
    @user = user
    mail to: user.email, subject: 'Password reset'
  end
end
