class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :reviewer, null: false
      t.text :review, null: false
      t.integer :score, null: false

      t.integer :user_id, null: false
      t.integer :product_id, null: false


      t.timestamps
    end
    add_index :reviews, :reviewer
    add_index :reviews, :score
    add_index :reviews, :user_id
    add_index :reviews, :product_id
  end
end
