require 'rails_helper'

RSpec.feature "User logs in" do
  given(:user) { create(:activated_user) }

  # TODO: rewrite them into rspec correct syntax
  # scenario "micropost - invalid submission with ajax" do
  #   log_in_as(user)
  #   # invalid submission
  #   assert_no_difference 'Micropost.count' do
  #     post microposts_path, params: { micropost: { content: "" } }, xhr: true
  #   end
  #   # assert_select '.micropost_content', class: 'has-error' # TODO make this possible with Capybara
  #   assert_template 'microposts/create'
  #   assert_equal "text/javascript", response.content_type
  #   assert_match "can\'t be blank", CGI.unescape_html(response.body)
  # end

  # scenario "micropost - valid submission with ajax" do
  #   log_in_as(user)
  #   assert_difference 'Micropost.count', +1 do
  #     post microposts_path, params: { micropost: { content: 'a content' } }, xhr: true
  #   end
  #   assert_equal "text/javascript", response.content_type
  #   assert_match 'Turbolinks.visit', response.body        # js redirect
  #   assert_match 'http://www.example.com/', response.body # to root_path
  # end
end
