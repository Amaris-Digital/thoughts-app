class CreateThaughts < ActiveRecord::Migration[7.0]
  def change
    create_table :thaughts do |t|
      t.string :thaught_text
      t.references :user, null: false, foreign_key: true
      t.references :question, null: false, foreign_key: true

      t.timestamps
    end
  end
end
