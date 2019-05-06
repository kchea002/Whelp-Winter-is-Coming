class CreateBusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :location, null: false
      t.float :latitude
      t.float :longitude
      t.string :price
      t.timestamps
    end

    add_index :businesses, :name
  end
end
