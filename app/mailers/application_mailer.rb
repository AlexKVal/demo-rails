class ApplicationMailer < ActionMailer::Base
  default from: ENV['MJ_ADDRESS']
  layout 'mailer'
end
