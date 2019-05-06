# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Business.destroy_all


demo = User.create({email: "jonsnow@westeros.com", password: "password"})
demo.photo.attach(io: File.open('./app/assets/images/user/demo_user.png'), filename: 'demo_user.png')



business_one = Business.create({name: "Gendry's Smithy", location: "King's Landing", address:"The slums", longitude: 37.1, latitude: 39.9, price: '$$$'})
business_two = Business.create({name: "Hotpie's Bakery", location: "Riverlands", address:"Crossroads", longitude: 40.0, latitude: 69.9, price: '$$' })

business_one.photo.attach(io: File.open('./app/assets/images/business/gendry.jpg'), filename: 'gendry.jpg')
business_two.photo.attach(io: File.open('./app/assets/images/business/hotpie.jpg'), filename: 'hotpie.jpg')

