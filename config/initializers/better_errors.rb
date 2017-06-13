if Rails.env.development?
  BetterErrors.editor = "atm://open?url=file://%{file}&line=%{line}" if defined? BetterErrors
end
