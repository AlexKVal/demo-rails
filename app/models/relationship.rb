# == Schema Information
#
# Table name: relationships
#
#  id          :integer          not null, primary key
#  follower_id :integer          not null
#  followed_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
# Indexes
#
#  index_relationships_on_followed_id                  (followed_id)
#  index_relationships_on_follower_id                  (follower_id)
#  index_relationships_on_follower_id_and_followed_id  (follower_id,followed_id) UNIQUE
#
# Foreign Keys
#
#  fk_rails_followed_id  (followed_id => users.id) ON DELETE => cascade ON UPDATE => cascade
#  fk_rails_follower_id  (follower_id => users.id) ON DELETE => cascade ON UPDATE => cascade
#

class Relationship < ApplicationRecord
  belongs_to :follower, class_name: 'User'
  belongs_to :followed, class_name: 'User'

  # Rails 5 makes belongs_to association required by default
  # validates :follower_id, presence: true
  # validates :followed_id, presence: true
end
