class CreateThings < ActiveRecord::Migration
  def change
    create_table :things do |t|
      t.text :thing
      t.text :thing_type

      t.timestamps null: false
    end
  end
end
