module ApplicationHelper
  def title_prefix(page_title = '')
    # we cannot use string interpolation because #provide makes escaping
    page_title.empty? ? '' : page_title + ' | '
  end
end
