class CreateVideos < ActiveRecord::Migration[6.0]
  def change
    create_table :videos do |t|
      t.string :progress
      t.string :url

      t.timestamps
    end
  end
end
