module ApplicationHelper
  def posted_time_ago(created_at)
    "#{t(:posted)} #{time_ago_in_words(created_at)} #{t(:ago)}."
  end
end
