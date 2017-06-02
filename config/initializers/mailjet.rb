Mailjet.configure do |config|
  config.api_key = ENV['MJ_APIKEY_PUBLIC']
  config.secret_key = ENV['MJ_APIKEY_PRIVATE']
  # keep in sinc with environment/production config.action_mailer.default_options
  config.default_from = "#{Rails.configuration.app_name} <#{ENV['MJ_ADDRESS']}>"
end
