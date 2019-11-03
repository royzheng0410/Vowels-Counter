require 'rails_helper'

RSpec.describe Api::V1::TextItemsController, type: :controller do
  before do
    @text_item1 = FactoryGirl.create :text_item, text: "dsfgqwef"
    @text_item2 = FactoryGirl.create :text_item, text: "wqrterg"
    @text_item3 = FactoryGirl.create :text_item, text: "dsfxvbfggqwef"
  end
  describe "GET #index" do
    it "returns text items" do
      get :index
      expect(assigns(:text_items).count).to eq 3
      expect(response).to have_http_status(:success)
    end
  end

  describe "POST #create" do
    it "update text item count" do
      expect{
        post :create, params: {text_item: text_item_params}  
      }.to change(TextItem, :count).by(1)
      
      expect(response).to have_http_status(:success)
    end

    it "return error when validation failed" do
      text_item = text_item_params
      text_item["text"] = nil
      expect{
        post :create, params: {text_item: text_item}  
      }.to change(TextItem, :count).by(0)
      
      expect(response).to have_http_status(400)
    end
  end

  def text_item_params
    text_item = FactoryGirl.attributes_for(:text_item)
    text_item['text'] = "sdfgfr"
    text_item
  end

end
