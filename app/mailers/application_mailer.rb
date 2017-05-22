class ApplicationMailer < ActionMailer::Base
  default from: ENV['MJ_ADDRESS'] || 'noreply@example.com' # test and dev
  layout 'mailer'
end
