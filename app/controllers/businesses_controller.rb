class BusinessesController < ApplicationController
    
    def index
        @businesses = Business.all
        render :index
    end

    def show
        @business = Business.create!(business_params)
        render
    end

    def create
    end

    def business_params
        params.require(:business).permit(:bus)
    end
end
