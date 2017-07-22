FactoryGirl.define do
  factory :user do
    name { Faker::Name.first_name }
    email { Faker::Internet.email }

    password "password1"

    factory :not_activated_user do
      activated false
    end

    factory :activated_user do
      after(:create, &:activate)
    end
  end
end
