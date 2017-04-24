class User < ApplicationRecord
  has_many :microposts

  before_save { self.email.downcase! }

  validates :name, presence: true, length: { maximum: 50 }

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
  validates :email, uniqueness: { case_sensitive: false }, presence: true, length: { maximum: 255 },
    format: { with: VALID_EMAIL_REGEX }

  has_secure_password
end
