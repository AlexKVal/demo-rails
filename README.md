# demo-rails [![CircleCI][build-badge]][build]

### To install and run

Ensure that you have installed:
- ruby 2.4.1
- bundler >= 1.15.1
- node >= v8.2.1

Then just
```
> git clone
> cd demo-rails
> make setup
> make run
```
And open in a browser [http://lvh.me:5000](http://lvh.me:5000)

#### To login as admin
- email: `admin@example.org`
- password: `foobar`

### For testing
- run `rspec` to run specs
- run `rails test` to run microtests
- run `bundle exec guard` for TDD

To lint FactoryGirl factories run
`bundle exec rake factory_girl:lint`

### Mails preview
- open http://lvh.me:5000/rails/mailers

[build-badge]: https://circleci.com/gh/AlexKVal/demo-rails.svg?&style=shield&circle-token=a24ac042fa40345f975edf6e6fea4fa5a078672c
[build]: https://circleci.com/gh/AlexKVal/demo-rails
