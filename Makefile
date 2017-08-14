setup:
	gem install mailcatcher

	bundle install

	npm install -g mjml

	bin/rails db:setup

run:
	lsof -t -iTCP:1025 -sTCP:LISTEN | xargs kill -9
	mailcatcher

	rails s -p 5000

-include Makefile.local
