RSpec.configure do |config|
  config.before :each, :fog do
    Fog.mock!
  end

  config.after :each, :fog do
    Fog.unmock!
  end
end
