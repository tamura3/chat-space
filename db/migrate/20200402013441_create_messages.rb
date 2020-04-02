class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.references :user, null: false, foreign_key: true
      t.references :group, null: false, foreing_key: true
      # refence型にしてあると、_idとする必要がなく、インデックスの設定も自動的に行われる

      t.string :content
      t.string :image
      t.timestamps
    end
  end
end
