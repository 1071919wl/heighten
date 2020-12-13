# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Product.destroy_all

#! Desk
desk1 = Product.create!(
            name: "Jarvis Bamboo Standing Desk", 
            type_id: 1, 
            description: "A popular favorite among our craft- and earth-conscious customers. Customize your workspace with our beautiful, eco-friendly bamboo on our best reviewed, customer-adored Jarvis frame.",
            price: 559
        )

desk2 = Product.create!(
            name: "Jarvis Laminate Standing Desk", 
            type_id: 1, 
            description: "Made with longevity of desk and planet in mind, our Jarvis Laminate Standing Desk features an eco-friendly laminate desktop on our powerhouse Jarvis frame.",
            price: 499
        )

# desk3 = Product.create!(
#             name: "Remi Standing Desk", 
#             type_id: 1, 
#             description: "An adjustable-height desk for the budget-conscious. Created by the same designers, engineers, and manufacturers as our award-winning Jarvis, Remi gives you stability and a smooth, powerful lift.",
#             price: 449
#         )

# desk4 = Product.create!(
#             name: "Cora Standing Desk Converter", 
#             type_id: 1, 
#             description: "Create your own standing desk on any surface—traditional desk, kitchen table, hotel room table—and tuck it away when not in use. Welcome to your new active worklife.",
#             price: 149
#         )
        
#! Chair
chair1 = Product.create!(
            name: "ReGeneration Desk Chair by Knoll", 
            type_id: 2, 
            description: "Everything is thoughtfully engineered in this innovative take on the modern office chair. ReGeneration offers responsive comfort and intuitive adjustment in an eco-friendly chair made from recycled materials.",
            price: 610
        )

# chair2 = Product.create!(
#             name: "Capisco Chair by HÅG", 
#             type_id: 2, 
#             description: "Capisco’s award-winning design offers a variety of healthy and active sitting postures, making it the perfect complement to an adjustable standing desk.",
#             price: 799
#         )

#! Accessory
accessory1 = Product.create!(
                name: "Clamp-Mounted Surge Protector", 
                type_id: 3, 
                description: "A clean-look surge protector that offers easy access to all the ports you need.",
                price: 79
            )

# accessory2 = Product.create!(
#                 name: "Jarvis Monitor Arm", 
#                 type_id: 3, 
#                 description: "Elevating your monitor is the best way to keep your spine in healthy alignment. Added bonus: more desktop space.",
#                 price: 99
#             )





require 'open-uri'

#! Desk show page photo
file1 = open("https://heighten-seeds.s3-us-west-1.amazonaws.com/heighten_desks/heighten_desks/fully-jarvis-standing-desk-black-bamboo-contour-c-v1.jpg")
desk1.photo.attach(io: file1, filename: "img_#{desk1.id}.jpg")

# file2 = open("https://heighten-seeds.s3-us-west-1.amazonaws.com/heighten_desks/heighten_desks/fully-jarvis-standing-desk-alloy-laminate-walnut-c-v1.jpg")
# desk2.photo.attach(io: file2, filename: "img_#{desk2.id}.jpg")


#! Chair show page photo
file3 = open("https://heighten-seeds.s3-us-west-1.amazonaws.com/heighten_chairs/fully-knoll-regeneration-chair-onyx-olive-v1_1.jpg")
chair1.photo.attach(io: file3, filename: "img_#{chair1.id}.jpg")

# file4 = open("https://heighten-seeds.s3-us-west-1.amazonaws.com/heighten_desks/heighten_desks/fully-jarvis-standing-desk-alloy-laminate-walnut-c-v1.jpg")
# desk2.photo.attach(io: file2, filename: "img_#{desk2.id}.jpg")


#! Accessory show page photo
# file5 = open("https://heighten-seeds.s3-us-west-1.amazonaws.com/heighten_accessories/powerstrip_black_clampedtodesk_v03.jpg")
# accessory1.photo.attach(io: file5, filename: "img_#{accessory1.id}.jpg")

# file6 = open("https://heighten-seeds.s3-us-west-1.amazonaws.com/heighten_desks/heighten_desks/fully-jarvis-standing-desk-alloy-laminate-walnut-c-v1.jpg")
# desk2.photo.attach(io: file2, filename: "img_#{desk2.id}.jpg")