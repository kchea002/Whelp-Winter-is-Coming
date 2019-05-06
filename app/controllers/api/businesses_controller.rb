class Api::BusinessesController < ApplicationController
    
    def index
        @businesses = Business.all
        render :index
    end

    def show
        @business = Business.find(params[:id])
        render :show
    end

    def create
        @business = Business.create!(business_params)
        render :show
    end

    def business_params
        params.require(:business).permit(:name, :location, :address, :longitude, :latitude, :price)
    end
end


