class AddHousetoUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :house, :string
  end
end
