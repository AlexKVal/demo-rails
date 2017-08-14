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

    def login_as(user)
      login_with(email: user.email, password: user.password)
    end
  end
end
