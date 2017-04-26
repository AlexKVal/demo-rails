require 'test_helper'

class ApplicationHelperTest < ActionView::TestCase
  test "title prefix helper" do
    assert_empty title_prefix
    assert_equal 'Help | ', title_prefix('Help')
  end
end
