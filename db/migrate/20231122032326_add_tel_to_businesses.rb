class AddTelToBusinesses < ActiveRecord::Migration[7.0]
  def change
    add_column :businesses, :tel, :string
  end
end
