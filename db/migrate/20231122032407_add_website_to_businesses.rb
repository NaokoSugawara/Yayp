class AddWebsiteToBusinesses < ActiveRecord::Migration[7.0]
  def change
    add_column :businesses, :website, :string
  end
end
