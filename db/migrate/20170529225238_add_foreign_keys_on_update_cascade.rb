class AddForeignKeysOnUpdateCascade < ActiveRecord::Migration[5.0]
  def change
    add_foreign_key :microposts, :users, on_delete: :cascade, on_update: :cascade,
                    name: :fr_rails_user_id

    add_foreign_key :relationships, :users, column: :followed_id,
                    on_delete: :cascade, on_update: :cascade, name: :fk_rails_followed_id
    add_foreign_key :relationships, :users, column: :follower_id,
                    on_delete: :cascade, on_update: :cascade, name: :fk_rails_follower_id
  end
end
