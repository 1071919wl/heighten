class Api::ReviewsController < ApplicationController
    before_action :require_logged_in

    def show
        @review = Review.find(params[:id])
        if @review
            render :show
        else
            render json: ["404 Page not found"], status: 404
        end
    end

    def create
        @review = Review.new(review_params)

        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end

    end

    def update
        # @review = Review.find(id: review_params.id)
        # how i will need to grab the review by its ID

        # @review = Review.update(review_params)

        # if @review.save

        # end
        
    end

    



    private

    def review_params
        params.require(:review).permit(:reviewer, :review, :score, :user_id, :product_id)
    end
end
