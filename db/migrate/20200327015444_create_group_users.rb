class CreateGroupUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :group_users do |t|
      t.references :group, foreign_key: true
        #group_idではない。外部キーなのでreferences
      t.references :user, foreign_key: true
        #user_idではない。外部キーなのでreferences
      t.timestamps
    end
  end
end
