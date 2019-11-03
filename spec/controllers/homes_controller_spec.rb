require 'rails_helper'

RSpec.describe HomesController, type: :controller do
  render_views
  describe "GET #index" do
    it "returns http success" do
      get :index
      expect(response).to render_template "index"
    end
  end
end
