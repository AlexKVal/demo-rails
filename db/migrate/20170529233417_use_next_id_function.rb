class UseNextIdFunction < ActiveRecord::Migration[5.0]
  # 1483228800123 is unix timestamp in milliseconds of 1/1/2017
  def up
    execute <<-SQL.squish
      CREATE OR REPLACE FUNCTION next_id(IN id_seq_name regclass, OUT result bigint) AS $$
      DECLARE
        our_epoch bigint := 1483228800123;
        seq_id bigint;
        now_millis bigint;
      BEGIN
        SELECT nextval(id_seq_name) % 1024 INTO seq_id;
        SELECT FLOOR(EXTRACT(EPOCH FROM clock_timestamp()) * 1000) INTO now_millis;
        result := (now_millis - our_epoch) << 13;
        result := result | seq_id;
      END;
        $$ LANGUAGE PLPGSQL;
    SQL

    # fix for rails db:reset
    execute <<-SQL.squish
      CREATE SEQUENCE IF NOT EXISTS users_id_seq;
      CREATE SEQUENCE IF NOT EXISTS microposts_id_seq;
    SQL

    # now use the next_id() function to generate new ids
    execute <<-SQL.squish
      ALTER TABLE "users"      ALTER COLUMN "id" SET DEFAULT next_id('users_id_seq'::regclass);
      ALTER TABLE "microposts" ALTER COLUMN "id" SET DEFAULT next_id('microposts_id_seq'::regclass);
    SQL

    # update schema. Postgresql's bigint size 8 bytes
    change_column :users,         :id,          :integer, limit: 8

    change_column :microposts,    :id,          :integer, limit: 8
    change_column :microposts,    :user_id,     :integer, limit: 8

    change_column :relationships, :follower_id, :integer, limit: 8
    change_column :relationships, :followed_id, :integer, limit: 8

    # update old integer ids to new next_id() like bigint, including foreign keys
    # 12000000000 - kind of a couple of months since start of the 2017 epoch
    # 12000000000 << 13 => 98304000000000
    # 2147483647 - max integer
    execute <<-SQL.squish
      UPDATE users
      SET id = ((FLOOR(EXTRACT(EPOCH FROM created_at) * 1000) - 1483228800123)::bigint << 13) | (id % 1024)
      WHERE id < 2147483647;

      UPDATE microposts
      SET id = ((FLOOR(EXTRACT(EPOCH FROM created_at) * 1000) - 1483228800123)::bigint << 13) | (id % 1024)
      WHERE id < 2147483647;
    SQL
  end

  def down
    execute <<-SQL.squish
      ALTER TABLE "users"      ALTER COLUMN "id" SET DEFAULT nextval('users_id_seq'::regclass);
      ALTER TABLE "microposts" ALTER COLUMN "id" SET DEFAULT nextval('microposts_id_seq'::regclass);
    SQL

    execute <<-SQL.squish
      DROP FUNCTION next_id(IN id_seq_name regclass, OUT result bigint);
    SQL

    # returning back ids to integer is not possible anymore because of new bigint values
  end
end
