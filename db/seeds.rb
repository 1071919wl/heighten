# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Category.create(category: 'desk')
Category.create(category: 'chair')
Category.create(category: 'accessory')

#! Desk
Product.create(
    name: "Jarvis Bamboo Standing Desk", 
    type_id: 1, 
    description: "A popular favorite among our craft- and earth-conscious customers. Customize your workspace with our beautiful, eco-friendly bamboo on our best reviewed, customer-adored Jarvis frame.",
    price: 559
)
Product.create(
    name: "Jarvis Laminate Standing Desk", 
    type_id: 1, 
    description: "Made with longevity of desk and planet in mind, our Jarvis Laminate Standing Desk features an eco-friendly laminate desktop on our powerhouse Jarvis frame.",
    price: 499
)
#! Chair
Product.create(
    name: "ReGeneration Desk Chair by Knoll", 
    type_id: 2, 
    description: "Everything is thoughtfully engineered in this innovative take on the modern office chair. ReGeneration offers responsive comfort and intuitive adjustment in an eco-friendly chair made from recycled materials.",
    price: 610
)
#! Accessory
Product.create(
    name: "Clamp-Mounted Surge Protector", 
    type_id: 3, 
    description: "A clean-look surge protector that offers easy access to all the ports you need.",
    price: 79
)