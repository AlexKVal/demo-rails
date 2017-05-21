class CreateRelationships < ActiveRecord::Migration[5.0]
  def change
    create_table :relationships do |t|
      t.references :follower, foreign_key: { to_table: :users }, null: false
      t.references :followed, foreign_key: { to_table: :users }, null: false

      t.timestamps
    end
    add_index :relationships, [:follower_id, :followed_id], unique: true
  end

  # it's the same as
  # def change
  #   create_table :relationships do |t|
  #     t.integer :follower_id, null: false
  #     t.integer :followed_id, null: false
  #
  #     t.timestamps
  #   end
  #   add_index :relationships, :follower_id
  #   add_index :relationships, :followed_id
  #   add_index :relationships, [:follower_id, :followed_id], unique: true
  # end
end
