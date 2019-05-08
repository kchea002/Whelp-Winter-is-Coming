class Business < ApplicationRecord
      validates :name, :address, :location, presence: true

     has_many :reviews,
        primary_key: :id,
        foreign_key: :business_id,
        class_name: :Review

    has_one_attached :photo
    has_many_attached :photos

    def average_rating
        reviews.average(:rating)
    end
end
