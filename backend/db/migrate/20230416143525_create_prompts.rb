class CreatePrompts < ActiveRecord::Migration[7.0]
  def change
    create_table :prompts do |t|
      t.string :prompt_text
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
