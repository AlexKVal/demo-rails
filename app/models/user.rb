# == Schema Information
#
# Table name: users
#
#  id                :integer          not null, primary key
#  name              :string
#  email             :string
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  password_digest   :string
#  remember_digest   :string
#  admin             :boolean          default(FALSE)
#  activation_digest :string
#  activated         :boolean          default(FALSE)
#  activated_at      :datetime
#  reset_digest      :string
#  reset_sent_at     :datetime
#  microposts_count  :integer          default(0)
#
# Indexes
#
#  index_users_on_email  (email) UNIQUE
#

class User < ApplicationRecord
  attr_accessor :remember_token, :activation_token, :reset_token

  has_many :microposts
  has_many :active_relationships, class_name: 'Relationship',
                                  foreign_key: 'follower_id'
  has_many :passive_relationships, class_name: 'Relationship',
                                  foreign_key: 'followed_id'
  has_many :following, through: :active_relationships,  source: :followed
  has_many :followers, through: :passive_relationships, source: :follower # 'source' on purpose

  before_save { self.email.downcase! }

  validates :name, presence: true, length: { maximum: 50 }

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
  validates :email, presence: true, length: { maximum: 255 },
                    format: { with: VALID_EMAIL_REGEX },
                    uniqueness: { case_sensitive: false }

  has_secure_password

  validates :password, presence: true, length: { minimum: 6 }, allow_nil: true

  scope :ordered_by_id, -> { order(:id) }
  scope :activated, -> { where(activated: true) }

  class << self
    # returns the hash digest of the given string
    def digest(string)
      cost = ActiveModel::SecurePassword.min_cost ? BCrypt::Engine::MIN_COST : BCrypt::Engine.cost
      BCrypt::Password.create(string, cost: cost)
    end

    # returns a random token
    def new_token
      SecureRandom.urlsafe_base64
    end
  end

  # defines a proto-feed
  def feed
    following_ids = active_relationships.select(:followed_id)
    own_microposts = Micropost.where(user: self)

    Micropost
      .where(user_id: following_ids)
      .or(own_microposts)
      .includes(:user)
  end

  def remember
    self.remember_token = User.new_token
    update_attribute(:remember_digest, User.digest(remember_token))
  end

  def authenticated?(attribute, token)
    digest = send("#{attribute}_digest")
    return false if digest.nil?
    BCrypt::Password.new(digest).is_password?(token)
  end

  def forget
    update_attribute(:remember_digest, nil)
  end

  # activates an account
  def activate
    return if activated?
    update_columns(activated: true, activated_at: Time.zone.now, updated_at: Time.zone.now)
  end

  # I am passing virtual params (activation_ and reset_ tokens) as a second param
  # because of async job behind the scenes used by UserMailer
  # https://stackoverflow.com/a/42602214/3874570
  def send_activation_email
    ensure_activation_token_set
    UserMailer.account_activation(self, activation_token).deliver_later unless activated?
  end

  def send_password_reset_email
    ensure_reset_token_set
    UserMailer.password_reset(self, reset_token).deliver_later
    update_attribute(:reset_sent_at, Time.zone.now)
  end

  def password_reset_expired?
    reset_sent_at < 2.hours.ago # erlier than
  end

  # Follows a user
  def follow(other_user)
    following << other_user
  end

  # Unfollow a user
  def unfollow(other_user)
    following.delete(other_user)
  end

  # Returns true if the current user is following the other user
  def following?(other_user)
    following.include?(other_user)
  end

  private

    def ensure_activation_token_set
      unless activation_token
        self.activation_token = User.new_token
        update_attribute(:activation_digest, User.digest(activation_token))
      end
    end

    def ensure_reset_token_set
      unless reset_token
        self.reset_token = User.new_token
        update_attribute(:reset_digest, User.digest(reset_token))
      end
    end
end
