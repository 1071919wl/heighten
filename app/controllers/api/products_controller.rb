class Api::ProductsController < ApplicationController

    def index
        @products = Product.all
        render :index
    end

    def show
        @product = Product.find(params[:id])
        if @product
            render :show
        else
            render json: ["404 Page not found"], status: 404
        end
    end
    

end
