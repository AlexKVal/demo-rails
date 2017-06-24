require 'test_helper'

class ActivationEmailsControllerTest < ActionDispatch::IntegrationTest
  include ActiveJob::TestHelper # because of UserMailer.deliver_later

  def setup
    ActionMailer::Base.deliveries.clear
  end

  test "re-sending activation email" do
    perform_enqueued_jobs do
      # sign up a new user
      assert_difference 'User.count', +1 do
        post signup_path, params: { user: {
          name: "John Dow",
          email: "john@example.com",
          password: "foobar"
        } }
      end
      assert_equal 1, ActionMailer::Base.deliveries.size
      assert_redirected_to welcome_path
      follow_redirect!
      assert flash.empty?
      assert_select '.email', 'john@example.com'
      assert_select 'form[action=?]', activation_emails_path

      # 'send me it again'
      assert_difference 'ActionMailer::Base.deliveries.size', +1 do
        post activation_emails_path, params: {email: 'john@example.com'}
      end
      mail = ActionMailer::Base.deliveries.last
      assert_equal "Please verify your email address", mail.subject
      assert_equal ['john@example.com'], mail.to
    end
  end

  test "edge cases: if the user with such email does not exit anymore" do
    # the 're-send' button should not be shown if session[:data_email] is empty
    get welcome_path
    assert_select 'form[action=?]', activation_emails_path, count: 0

    # sign up a user
    assert_difference 'User.count', +1 do
      post signup_path, params: { user: {
        name: "John Dow",
        email: "john@example.com",
        password: "foobar"
      } }
    end
    # then delete it
    User.last.delete

    # the form still contains the email of the deleted user
    assert_no_difference 'ActionMailer::Base.deliveries.size' do
      post activation_emails_path, params: {email: "john@example.com"}
    end
    assert_redirected_to root_path
    assert_match "john@example.com", flash[:danger]
  end
end
