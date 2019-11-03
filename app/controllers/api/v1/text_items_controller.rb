class Api::V1::TextItemsController < ApplicationController
  def index
    @text_items = TextItem.all.order('created_at desc').paginate(:page => params[:page])
    render json: {text_items: @text_items, page: @text_items.current_page, pages: @text_items.total_pages}
  end

  def create
    @text_item = TextItem.new text_item_params
    if @text_item.save
      render json: {text_item: @text_item}
    else
      render json: {error: @text_item.errors}, status: 400
    end
  end

  def text_item_params
    params.require(:text_item).permit(:text)
  end
end
