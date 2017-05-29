class DropRelationshipsForeignKeys < ActiveRecord::Migration[5.0]
  def up
    execute <<-SQL.squish
      DO $$
      declare r record;
      begin
        for r in (
          select constraint_name
          from information_schema.table_constraints
          where table_name='relationships'
          and constraint_name like 'fk_%'
        ) loop
        raise info '%','dropping '||r.constraint_name;
        execute CONCAT('ALTER TABLE "relationships" DROP CONSTRAINT '||r.constraint_name);
        end loop;
      end;
      $$
    SQL

    # ALTER TABLE ONLY relationships
    #     ADD CONSTRAINT relationships_pkey PRIMARY KEY (id);
  end

  def down
    add_foreign_key "relationships", "users", column: "followed_id"
    add_foreign_key "relationships", "users", column: "follower_id"
  end
end
