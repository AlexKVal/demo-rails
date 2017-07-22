require 'rails_helper'

RSpec.feature "User logs in" do
  scenario "with incorrect credentials" do
    login_with email: 'wrong@email.com', password: 'wrong-password'
    expect(page).to have_content 'Incorrect email/password'
  end
end
