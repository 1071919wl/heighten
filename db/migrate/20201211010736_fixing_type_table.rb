class FixingTypeTable < ActiveRecord::Migration[5.2]
  def change
    rename_column :types, :type, :category
    rename_table :types, :categories

  end
end
