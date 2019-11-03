require 'rails_helper'

RSpec.describe TextItem, type: :model do
  describe "#Validate a text item" do
    it "should be invalid if there's no text" do
      expect(TextItem.new()).not_to be_valid
    end

    it "should update vowels count" do
      text_item = FactoryGirl.create :text_item, text: 'awitu'
      expect(text_item.vowels_count).to eq 3
    end
  end
end
