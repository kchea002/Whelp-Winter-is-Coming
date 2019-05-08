# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open_uri'

User.destroy_all
Business.destroy_all
Review.destroy_all

demo = User.create(email: "jonsnow@westeros.com", password: "password", first_name: 'Jon', last_name: 'Snow', house: 'House Stark')
demo.photo.attach(io: File.open('./app/assets/images/user/demo_user.png'), filename: 'demo_user.png')
user1 = User.create(first_name: 'Tyrion', last_name: 'Lannister', email: 'mary123@mail.com', password: 'password', house: 'House Lannister')


business1 = Business.create({name: "Gendry's Smithy", location: "King's Landing", address:"Street of Steel", longitude: 37.1, latitude: 39.9, price: '$'})
business2 = Business.create({name: "Hotpie's Crossroad Inn", location: "Riverlands", address:"Crossroads", longitude: 40.0, latitude: 69.9, price: '$' })
business3 = Business.create({name: "Littlefinger's", location: "King's Landing", address:"Street of Silk", longitude: 40.0, latitude: 69.9, price: '$$$' })
business4 = Business.create({name: "Night's Watch", location: "The North", address:"Castle Black", longitude: 40.0, latitude: 69.9, price: '$' })
business5 = Business.create({name: "Frey's Wedding Planners", location: "Riverlands", address:"The Twins", longitude: 40.0, latitude: 69.9, price: '$$$' })


business1.photo.attach(io: File.open('./app/assets/images/business/gendry2.png'), filename: 'gendry2.png')
business1.photos.attach(io: File.open('./app/assets/images/business/gendry.jpg'), filename: 'gendry.jpg')
business1.photos.attach(io: File.open('./app/assets/images/business/gendry3.jpg'), filename: 'gendry3.jpg')

business2.photo.attach(io: File.open('./app/assets/images/business/HP1.jpg'), filename: 'HP1.jpg')
business2.photos.attach(io: File.open('./app/assets/images/business/HP2.jpg'), filename: 'HP2.jpg')
business2.photos.attach(io: File.open('./app/assets/images/business/HP3.jpg'), filename: 'HP3.jpg')

business3.photo.attach(io: File.open('./app/assets/images/business/LF1.png'), filename: 'LF1.png')
business3.photos.attach(io: File.open('./app/assets/images/business/LF2.jpg'), filename: 'LF2.jpg')
business3.photos.attach(io: File.open('./app/assets/images/business/LF3.jpg'), filename: 'LF3.jpg')


business4.photo.attach(io: File.open('./app/assets/images/business/NW1.jpg'), filename: 'NW1.jpg')
business4.photos.attach(io: File.open('./app/assets/images/business/NW2.png'), filename: 'NW2.png')
business4.photos.attach(io: File.open('./app/assets/images/business/NW3.jpg'), filename: 'NW3.jpg')


business5.photo.attach(io: File.open('./app/assets/images/business/FW2.png'), filename: 'FW2.png')
business5.photos.attach(io: File.open('./app/assets/images/business/FW3.jpg'), filename: 'FW3.jpg')
business5.photos.attach(io: File.open('./app/assets/images/business/FW1.jpg'), filename: 'FW1.jpg')

Review.create(business_id: business3.id, user_id: user1.id, rating: 5, body:"Best place in town. I would go again but a Lannister always pays his debts.")


