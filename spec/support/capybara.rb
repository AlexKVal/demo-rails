require "capybara/poltergeist"

Capybara.register_driver :poltergeist do |app|
  Capybara::Poltergeist::Driver.new(app, window_size: [1300, 1000])
end

Capybara.javascript_driver = :poltergeist
Capybara.default_max_wait_time = 8
Capybara::Screenshot.prune_strategy = { keep: 10 }
Capybara.asset_host = "http://lvh.me:5000"
