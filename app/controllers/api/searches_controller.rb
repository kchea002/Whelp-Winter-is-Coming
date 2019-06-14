class Api::SearchesController < ApplicationController

    def location_search
        query = params[:query]
        locations = query.split(" ").map do |word|
            "LOWER(location) LIKE '%#{word.downcase}%'" 
        end.join(" OR ");
        
             @businesses = Business.where("#{locations}")
   
            @businesses = Business.all if @businesses.empty?
      
        render '/api/businesses/index'

        
    end
end