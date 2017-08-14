setup:
	gem install mailcatcher

	bundle install

	npm install -g mjml

	bin/rails db:setup

run:
	lsof -t -iTCP:1025 -sTCP:LISTEN | xargs kill -9
	mailcatcher

	rails s -p 5000

tests:
	@echo -> run Microtests
	bundle exec rake test

	@echo -> run RSpec
	bundle exec rspec

-include Makefile.local
