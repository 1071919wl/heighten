class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name, null: false
      t.integer :type_id, null: false
      t.string :description, null: false
      t.integer :price, null: false

      t.timestamps
    end
    add_index :products, :name
    add_index :products, :type_id
  end
end
