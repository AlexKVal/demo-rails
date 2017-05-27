# == Schema Information
#
# Table name: microposts
#
#  id         :integer          not null, primary key
#  content    :text
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  picture    :string
#
# Indexes
#
#  user_and_created_index  (user_id,created_at)
#

class Micropost < ApplicationRecord
  belongs_to :user, counter_cache: true

  default_scope -> { order(created_at: :desc) }

  mount_uploader :picture, PictureUploader

  validates :user_id, presence: true
  validates :content, presence: true, length: { maximum: 140 }
  validate  :picture_size

  private

    # validates the size of an uploaded picture
    def picture_size
      errors.add(:picture, 'should be less than 5MB') if picture.size > 5.megabytes
    end
end
