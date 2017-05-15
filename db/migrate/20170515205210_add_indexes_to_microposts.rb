class AddIndexesToMicroposts < ActiveRecord::Migration[5.0]
  def up
    say_with_time "Adding indexes to microposts..." do
      add_index :microposts, [:user_id, :created_at], name: 'user_and_created_index'
    end
  end

  def down
    remove_index :microposts, name: 'user_and_created_index'
  end
end
