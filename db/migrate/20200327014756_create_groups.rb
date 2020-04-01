class CreateGroups < ActiveRecord::Migration[5.0]
  def change
    create_table :groups do |t|
      t.string :name, null: false
      t.index :name, unique: true
        #1行にまとめる場合
        #t.string :name, null: false, index: true, unique: true
      t.timestamps
    end
  end
end
