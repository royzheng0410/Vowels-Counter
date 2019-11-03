class CreateTextItems < ActiveRecord::Migration[5.1]
  def change
    create_table :text_items do |t|
      t.text     :text
      t.integer  :vowels_count
      t.timestamps
    end
  end
end
