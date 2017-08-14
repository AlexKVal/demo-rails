require 'rails_helper'

RSpec.feature "User logs in", js: true do
  scenario "with incorrect credentials" do
    login_with email: 'wrong@email.com', password: 'wrong-password'

    expect(page).to have_content 'Incorrect email/password'
  end

  context "when activated account" do
    given(:user) { create(:activated_user) }

    scenario "with correct credentials" do
      login_with email: user.email, password: user.password

      expect(page).to have_content 'view profile'
    end
  end

  context "when not activated account" do
    given(:user) { create(:not_activated_user) }

    scenario "with correct credentials" do
      login_with email: user.email, password: user.password

      expect(page).to have_content 'confirm your email address'
      expect(page).to have_content user.email
    end
  end
end
