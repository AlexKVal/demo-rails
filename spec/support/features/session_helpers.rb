module Features
  module SessionHelpers
    def login_with(email:, password:)
      visit root_path
      within '#login-form' do
        fill_in 'Email', with: email
        fill_in 'Password', with: password
        click_button 'Log in'
      end
    end
  end
end
