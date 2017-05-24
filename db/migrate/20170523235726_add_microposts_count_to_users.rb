class AddMicropostsCountToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :microposts_count, :integer, default: 0

    reversible do |dir|
      dir.up { data }
    end
  end

  def data
    execute <<-SQL.squish
      UPDATE users
         SET microposts_count = (
           SELECT count(1) FROM microposts WHERE microposts.user_id = users.id
         )
    SQL
  end
end
