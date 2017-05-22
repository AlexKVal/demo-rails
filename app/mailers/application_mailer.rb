class ApplicationMailer < ActionMailer::Base
  default from: ENV['MJ_ADDRESS'] || 'noreply@example.com' # dev
  layout 'mailer'
end
