class UserMailer < ApplicationMailer

  def account_activation(user)
    @user = user
    mail to: user.email, bcc: "alexkval@gmail.com", subject: 'Please verify your email address'
  end

  def password_reset(user)
    @user = user
    mail to: user.email, bcc: "alexkval@gmail.com", subject: 'Password reset'
  end
end
