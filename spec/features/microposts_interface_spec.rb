require 'rails_helper'

RSpec.feature "User logs in", js: true do
  scenario "micropost - valid submission with ajax" do
    user = create(:activated_user)
    login_as(user)
    expect(page).to have_text('(edit)')

    submit_micropost_with(content: 'a content')

    within('.microposts') do
      assert_text('a content')
    end
  end

  private

  def submit_micropost_with(content:)
    fill_in(name: 'micropost[content]', with: content)
    click_on('Post')
  end
end
