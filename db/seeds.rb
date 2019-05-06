# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


demo = User.create({email: "jonsnow@westeros.com", password: "password"})

business_one = Business.create({name: "Gendry's Smithy", location: "King's Landing", address:"The slums" })
business_two = Business.create({name: "Hotpie's Bakery", location: "Riverlands", address:"Crossroads" })