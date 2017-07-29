# demo-rails [![CircleCI][build-badge]][build]

https://circleci.com/gh/AlexKVal/demo-rails.svg?&style=shield&circle-token=a24ac042fa40345f975edf6e6fea4fa5a078672c

### To run
- `npm install -g mjml`
- run `scripts/start.sh`
- open in a browser http://lvh.me:5000

### For testing
- run `rspec` to run specs
- run `rails test` to run microtests
- run `bundle exec guard` for TDD with microtests

To lint FactoryGirl factories run
`bundle exec rake factory_girl:lint`

### Mails preview
- open http://lvh.me:5000/rails/mailers

[build-badge]: https://circleci.com/gh/AlexKVal/demo-rails.svg?&style=shield&circle-token=a24ac042fa40345f975edf6e6fea4fa5a078672c
[build]: https://circleci.com/gh/AlexKVal/demo-rails
