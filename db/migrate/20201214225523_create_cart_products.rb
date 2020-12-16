class CreateCartProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :cart_products do |t|
      t.integer :cart_id, null: false
      t.integer :product_id

      t.timestamps
    end
    add_index :cart_products, :cart_id
    add_index :cart_products, :product_id
  end
end
