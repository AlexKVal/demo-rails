FactoryGirl.define do
  factory :user, aliases: [:activated_user] do
    name { Faker::Name.first_name }
    email { Faker::Internet.email }

    password "password1"

    activated true
    activated_at { 1.hour.ago }

    factory :not_activated_user do
      activated false
    end
  end
end
