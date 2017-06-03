class UserMailer < ApplicationMailer
  def admin_email
    'alexkval@gmail.com'
  end

  def account_activation(user)
    @user = user
    mail(
      to: user.email,
      bcc: admin_email,
      subject: 'Please verify your email address'
    ) do |format|
      format.text
      format.mjml
    end
  end

  def password_reset(user)
    @user = user
    mail(
      to: user.email,
      bcc: admin_email,
      subject: 'Password reset'
    ) do |format|
      format.text
      format.html
    end
  end
end
