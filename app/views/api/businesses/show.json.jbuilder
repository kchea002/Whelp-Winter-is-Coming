json.business do 
    json.partial! '/api/businesses/business', business: @business
    json.pictures @business.photos.map {|photo| url_for(photo)}
end

