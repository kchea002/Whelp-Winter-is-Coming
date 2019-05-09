json.business do 
    json.partial! '/api/businesses/business', business: @business
    json.pictures @business.photos.map {|photo| url_for(photo)}
    json.reviewIds @business.reviews.pluck(:id)
end


@business.reviews.includes(:author).each do |review|
    json.reviews do
        json.set! review.id do
            json.partial! '/api/reviews/review', review: review
        end
    end

     json.authors do 
        json.set! review.author.id do 
            json.partial! '/api/users/user', user: review.author
        end
    end
end