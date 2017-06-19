require 'test_helper'

class MicropostsInterfaceTest < ActionDispatch::IntegrationTest
  def setup
    @user = users(:michael)
  end

  test "micropost interface, no ajax" do
    log_in_as(@user)
    get root_path
    assert_select '.pagination'
    assert_select 'input[type=file]'
    # invalid submission
    assert_no_difference 'Micropost.count' do
      post microposts_path, params: { micropost: { content: "" } }
    end
    assert_match "can't be blank", flash[:danger]
    # valid submission
    content = "This micropost really ties the room together"
    picture = fixture_file_upload('files/rails.png', 'image/png')
    assert_difference 'Micropost.count', +1 do
      post microposts_path, params: { micropost: { content: content, picture: picture } }
    end
    assert assigns(:micropost).picture?
    assert_redirected_to root_path
    follow_redirect!
    assert_match content, response.body
    # delete micropost
    assert_select 'a', text: 'delete'
    first_micropost = @user.microposts.page(1).first
    assert_difference 'Micropost.count', -1 do
      delete micropost_path(first_micropost)
    end
    # visit different user (no delete links)
    get user_path(users(:archer))
    assert_select 'a', text: 'delete', count: 0
  end

  test "micropost sidebar count" do
    log_in_as(@user)
    get root_path
    assert_match "#{@user.microposts_count} microposts", response.body
    # user with zero microposts
    other_user = users(:malory)
    log_in_as(other_user)
    get root_path
    assert_match "0 microposts", response.body
    other_user.microposts.create!(content: "A micropost")
    get root_path
    assert_match "1 micropost", response.body
  end

  test "micropost - invalid submission with ajax" do
    log_in_as(@user)
    # invalid submission
    assert_no_difference 'Micropost.count' do
      post microposts_path, params: { micropost: { content: "" } }, xhr: true
    end
    # assert_select '.micropost_content', class: 'has-error' # TODO make this is possible with Capybara
    assert_template 'microposts/create'
    assert_equal "text/javascript", response.content_type
    assert_match "can\'t be blank", CGI.unescape_html(response.body)
  end

  test "micropost - valid submission with ajax" do
    log_in_as(@user)
    assert_difference 'Micropost.count', +1 do
      post microposts_path, params: { micropost: { content: 'a content' } }, xhr: true
    end
    assert_equal "text/javascript", response.content_type
    assert_match 'Turbolinks.visit', response.body        # js redirect
    assert_match 'http://www.example.com/', response.body # to root_path
  end
end
