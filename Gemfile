ruby "~> 2.3.0"

source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'rails', '~> 5.0.2'
gem 'puma', '~> 3.0' # Use Puma as the app server
gem 'sass-rails', '~> 5.0' # Use SCSS for stylesheets
gem 'uglifier', '>= 1.3.0' # Use Uglifier as compressor for JavaScript assets
gem 'jquery-rails' # Use jquery as the JavaScript library
gem 'turbolinks', '~> 5' # Turbolinks makes navigating your web application faster
gem 'bcrypt', '~> 3.1.7' # Use ActiveModel has_secure_password
gem 'bootstrap-sass', '3.3.6' # Official Sass port of Bootstrap 2 and 3
gem 'local_time' # Rails engine for cache-friendly, client-side local time
gem 'will_paginate', '3.1.1' # Pagination library for Rails
gem 'bootstrap-will_paginate', '1.0.0' # Format will_paginate html to match Bootstrap styling
gem "autoprefixer-rails" # Autoprefixer for Ruby and Ruby on Rails

####################################################################################
# Third party services
gem 'mailjet' # Mailjet official Ruby GEM
gem 'mjml-rails' # MJML + ERb/Haml/Slim view templateg
gem 'fog-google', group: :production # google cloud
gem 'google-api-client', '~> 0.8.6', group: :production # used by fog-google


gem 'carrierwave', '~> 1.1' # Classier solution for file uploads for Rails
gem 'mini_magick', '~> 4.7' # A ruby wrapper for ImageMagick
gem 'pg', '0.18.4' # use postgres in all three environments
gem 'faker', '1.6.6' # I want it in production too

group :development do
  # Annotate Rails classes with schema and routes info
  gem 'annotate', git: 'https://github.com/ctran/annotate_models.git'
  gem 'meta_request' # Chrome extension for Rails development
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platform: :mri
  gem 'pry-rails'
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '~> 3.0.5'
  # Spring speeds up development by keeping your application running in the background.
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :development, :test do
  gem "awesome_print" # pretty print ruby objects in rails console
end

group :test do
  gem 'rails-controller-testing' # Brings back `assigns` and `assert_template` to your Rails tests
  gem 'minitest-reporters' # Create customizable MiniTest output formats
  gem 'guard' # A CLI tool to easily handle events on file system modifications
  gem 'guard-minitest' # Guard::Minitest automatically run your tests (much like autotest)
end
