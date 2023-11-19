class CreateBusinesses < ActiveRecord::Migration[7.0]
  def change
    create_table :businesses do |t|
      t.string :name
      t.string :address
      t.string :city
      t.string :state
      t.string :zipcode
      t.integer :stars
      t.integer :review_count
      t.string :hours
      t.timestamps
    end
  end
end
