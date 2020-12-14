class Api::CategoriesController < ApplicationController

    def show
        @category=Category.find(params[:id])
        @products=Product.where(type_id: @category)
        render :show
    end
end
