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

desk3 = Product.create!(
            name: "Remi Standing Desk", 
            type_id: 1, 
            description: "An adjustable-height desk for the budget-conscious. Created by the same designers, engineers, and manufacturers as our award-winning Jarvis, Remi gives you stability and a smooth, powerful lift.",
            price: 449
        )

desk4 = Product.create!(
            name: "Cora Standing Desk Converter", 
            type_id: 1, 
            description: "Create your own standing desk on any surface—traditional desk, kitchen table, hotel room table—and tuck it away when not in use. Welcome to your new active worklife.",
            price: 149
        )

desk5 = Product.create!(
            name: "Cooper Standing Desk Converter", 
            type_id: 1, 
            description: "Your desk plus Cooper = freedom to sit, stand, lean, stretch, and feel a whole lot better at your work.",
            price: 299
        )

desk6 = Product.create!(
            name: "Jarvis L-Shaped Standing Desk", 
            type_id: 1, 
            description: "Modern, versatile, adjustable. Finally, a corner desk that doesn’t make you feel like you’re stuck in the corner.",
            price: 1299
        )

desk7 = Product.create!(
            name: "Jarvis Whiteboard Standing Desk", 
            type_id: 1, 
            description: "A brain-stimulating, idea-capturing desk for the creative thinker—made with the same love we put into all of our Jarvis desks.",
            price: 609
        )

desk8 = Product.create!(
            name: "Jarvis EcoTop Standing Desk", 
            type_id: 1, 
            description: "Our most earth-friendly top—durable and minimalist.",
            price: 519
        )

        
#! Chair
chair1 = Product.create!(
            name: "ReGeneration Desk Chair by Knoll", 
            type_id: 2, 
            description: "Everything is thoughtfully engineered in this innovative take on the modern office chair. ReGeneration offers responsive comfort and intuitive adjustment in an eco-friendly chair made from recycled materials.",
            price: 610
        )

chair2 = Product.create!(
            name: "Capisco Chair by HAG", 
            type_id: 2, 
            description: "Capisco’s award-winning design offers a variety of healthy and active sitting postures, making it the perfect complement to an adjustable standing desk.",
            price: 799
        )

chair3 = Product.create!(
            name: "Luna Standing Desk Stool", 
            type_id: 2, 
            description: "Find a more natural posture halfway between sitting and standing. The slip-resistant base keeps you stable at different angles, helping to open your hips, activate your core, and keep you more engaged in your work.",
            price: 199
        )

chair4 = Product.create!(
            name: "Tic Toc Chair", 
            type_id: 2, 
            description: "The stool that keeps tune with your body’s changing needs, Tic Toc keeps you in happy, healthy, flowing motion.",
            price: 225
        )

chair5 = Product.create!(
            name: "ILOA Saddle Chair", 
            type_id: 2, 
            description: "A perfect mix of form and function, this beautiful chair was thoughtfully designed by Jonas Hakaniemi to create healthy spine alignment and comfort your lower back.",
            price: 395
        )

chair6 = Product.create!(
            name: "Fully Balans Kneeling Chair", 
            type_id: 2, 
            description: "Designed in collaboration with Hans Christian Mengshoel, the Fully Balans helps you find a more natural way to sit with a backrest that lets you lean back to stretch.",
            price: 379
        )

chair7 = Product.create!(
            name: "Numo Chair by aeris", 
            type_id: 2, 
            description: "A super-comfortable chair that works anywhere around the office, Numo adapts to the way you sit and encourages natural movement, both forward and backward.",
            price: 289
        )

chair8 = Product.create!(
            name: "Ollo Office Chair By Knoll", 
            type_id: 2, 
            description: "A versatile chair with a straightforward design, Ollo offers instant comfort with an active back that supports your posture while also accommodating natural movement.",
            price: 468
        )


#! Accessory
accessory1 = Product.create!(
                name: "Clamp-Mounted Surge Protector", 
                type_id: 3, 
                description: "A clean-look surge protector that offers easy access to all the ports you need.",
                price: 79
            )

accessory2 = Product.create!(
                name: "Jarvis Monitor Arm", 
                type_id: 3, 
                description: "Elevating your monitor is the best way to keep your spine in healthy alignment. Added bonus: more desktop space.",
                price: 99
            )

accessory3 = Product.create!(
                name: "Jarvis Dual Monitor Arm", 
                type_id: 3, 
                description: "With all the flexibility and adjustability you could want, our dual monitor arm gives your laptops full range of motion for comfortable viewing at any angle.",
                price: 159
            )

accessory4 = Product.create!(
                name: "Bamboo Recycling Bin", 
                type_id: 3, 
                description: "Crafted from the same sustainable bamboo as our Jarvis Bamboo Standing desk, the two make a beautiful pair.",
                price: 49
            )

accessory5 = Product.create!(
                name: "Colbe Bamboo Shelving Unit", 
                type_id: 3, 
                description: "With its minimal design and spacious shelves, the Colbe Bamboo Shelving Unit gives you plenty of room to express any office’s personality.",
                price: 499
            )

accessory6 = Product.create!(
                name: "Topo Anti-Fatigue Mat", 
                type_id: 3, 
                description: "The world’s first calculated terrain standing mat, with nature-inspired peaks and valleys to keep your body engaged and your posture in peaceful alignment.",
                price: 99
            )

accessory7 = Product.create!(
                name: "Field Privacy Panel", 
                type_id: 3, 
                description: "Mounting above the desk helps minimize ambient noise from around the office, while a below-desk mount provides a modesty screen. Made from PET recycled polyester: durable, lightweight, and sustainable.",
                price: 95
            )

accessory8 = Product.create!(
                name: "Acrylic Desk Panel", 
                type_id: 3, 
                description: "Starting at $325, our Acrylic Desk Panels safely separate desks and help encourage social distancing while at the office. These panels are durable and easy to clean. Available in two finishes: clear or frosted.",
                price: 325
            )

accessory9 = Product.create!(
                name: "Tic Toc Stand Balance Board", 
                type_id: 3, 
                description: "Make standing more comfortable and active with a low-profile board that moves with you naturally as you shift your weight.",
                price: 65
            )

accessory10 = Product.create!(
                name: "Beam LED Desk Lamp", 
                type_id: 3, 
                description: "Move between four cool-to-warm light temperatures and four levels of brightness with this stylish modern desk lamp. Touch-sensitive control makes it easy to find the ideal light for any situation.",
                price: 149
            )
            

require 'open-uri'

# Desk show page photo
file1 = open("https://heighten-seeds.s3-us-west-1.amazonaws.com/heighten_desks/heighten_desks/fully-jarvis-standing-desk-black-bamboo-contour-c-v1.jpg")
desk1.photo.attach(io: file1, filename: "img_#{desk1.id}.jpg")

file2 = open("https://heighten-seeds.s3-us-west-1.amazonaws.com/heighten_desks/heighten_desks/fully-jarvis-standing-desk-alloy-laminate-walnut-c-v1.jpg")
desk2.photo.attach(io: file2, filename: "img_#{desk2.id}.jpg")

file3 = open("https://heighten-seeds.s3-us-west-1.amazonaws.com/heighten_desks/heighten_desks/fully-remi-standing-desk-black-oak-laminate-v01.jpg")
desk3.photo.attach(io: file3, filename: "img_#{desk3.id}.jpg")

file4 = open("https://heighten-seeds.s3-us-west-1.amazonaws.com/heighten_desks/heighten_desks/fully-cora-standing-desk-converter-extended-on-desk-white_c_v1.jpg")
desk4.photo.attach(io: file4, filename: "img_#{desk4.id}.jpg")

file5 = open("https://heighten-seeds.s3-us-west-1.amazonaws.com/heighten_desks/heighten_desks/fully-cooper-bamboo-clean-v2.jpg")
desk5.photo.attach(io: file5, filename: "img_#{desk5.id}.jpg")

file6 = open("https://heighten-seeds.s3-us-west-1.amazonaws.com/heighten_desks/heighten_desks/fully-jarvis-l-shaped-standing-desk-bamboo-white-frame_c_v1.jpg")
desk6.photo.attach(io: file6, filename: "img_#{desk6.id}.jpg")

file7 = open("https://heighten-seeds.s3-us-west-1.amazonaws.com/heighten_desks/heighten_desks/fully-jarvis-standing-desk-white-whiteboard-c-v1.jpg")
desk7.photo.attach(io: file7, filename: "img_#{desk7.id}.jpg")

file8 = open("https://heighten-seeds.s3-us-west-1.amazonaws.com/heighten_desks/heighten_desks/fully-jarvis-alloy-frame-standing-desk-ecotop-black-contour-v1.jpg")
desk8.photo.attach(io: file8, filename: "img_#{desk8.id}.jpg")




# Chair show page photo
file9 = open("https://heighten-seeds.s3-us-west-1.amazonaws.com/heighten_chairs/fully-knoll-regeneration-chair-onyx-olive-v1_1.jpg")
chair1.photo.attach(io: file9, filename: "img_#{chair1.id}.jpg")

file10 = open("https://heighten-seeds.s3-us-west-1.amazonaws.com/heighten_chairs/fully-capisco-chair-era-cobalt-black-bg-01.jpg")
chair2.photo.attach(io: file10, filename: "img_#{chair2.id}.jpg")

file11 = open("https://heighten-seeds.s3-us-west-1.amazonaws.com/heighten_chairs/fully-luna-grey-seat-white-base-v2.jpg")
chair3.photo.attach(io: file11, filename: "img_#{chair3.id}.jpg")

file12 = open("https://heighten-seeds.s3-us-west-1.amazonaws.com/heighten_chairs/fully-tictoc-nat-v3.jpg")
chair4.photo.attach(io: file12, filename: "img_#{chair4.id}.jpg")

file13 = open("https://heighten-seeds.s3-us-west-1.amazonaws.com/heighten_chairs/fully-iloa-black-v2.jpg")
chair5.photo.attach(io: file13, filename: "img_#{chair5.id}.jpg")

file14 = open("https://heighten-seeds.s3-us-west-1.amazonaws.com/heighten_chairs/fully-balans-black-v2.jpg")
chair6.photo.attach(io: file14, filename: "img_#{chair6.id}.jpg")

file15 = open("https://heighten-seeds.s3-us-west-1.amazonaws.com/heighten_chairs/fully-numo-chair-wood-white-c-v1.jpg")
chair7.photo.attach(io: file15, filename: "img_#{chair7.id}.jpg")

file16 = open("https://heighten-seeds.s3-us-west-1.amazonaws.com/heighten_chairs/fully-knoll-ollo-chair-blue-grey-v2.jpg")
chair8.photo.attach(io: file16, filename: "img_#{chair8.id}.jpg")



#! Accessory show page photo
file17 = open("https://heighten-seeds.s3-us-west-1.amazonaws.com/heighten_accessories/powerstrip_black_clampedtodesk_v03.jpg")
accessory1.photo.attach(io: file17, filename: "img_#{accessory1.id}.jpg")

file18 = open("https://heighten-seeds.s3-us-west-1.amazonaws.com/heighten_accessories/fully-jarvis-monitor-arm-mounted-to-jarvis-desk-with-monitor-silver-side-view_c_v1.jpg")
accessory2.photo.attach(io: file18, filename: "img_#{accessory2.id}.jpg")

file19 = open("https://heighten-seeds.s3-us-west-1.amazonaws.com/heighten_accessories/fully-jarvis-dual-monitor-arm-mounted-to-jarvis-desk-with-monitors-silver_c_v1.jpg")
accessory3.photo.attach(io: file19, filename: "img_#{accessory3.id}.jpg")

file20 = open("https://heighten-seeds.s3-us-west-1.amazonaws.com/heighten_accessories/fully-bamboo-recycling-bin_c_v1.jpg")
accessory4.photo.attach(io: file20, filename: "img_#{accessory4.id}.jpg")

file21 = open("https://heighten-seeds.s3-us-west-1.amazonaws.com/heighten_accessories/fully-colbe-shelf-tall-short-black-bamboo-v1.jpg")
accessory5.photo.attach(io: file21, filename: "img_#{accessory5.id}.jpg")

file22 = open("https://heighten-seeds.s3-us-west-1.amazonaws.com/heighten_accessories/new_topo_topshot_black_2000x2000.jpg")
accessory6.photo.attach(io: file22, filename: "img_#{accessory6.id}.jpg")

file23 = open("https://heighten-seeds.s3-us-west-1.amazonaws.com/heighten_accessories/fully-field-panel-charcoal-jarvis-black-laminate-jma-v1.jpg")
accessory7.photo.attach(io: file23, filename: "img_#{accessory7.id}.jpg")

file24 = open("https://heighten-seeds.s3-us-west-1.amazonaws.com/heighten_accessories/fully-acrylic-panel-frosted-jarvis-laminate-graphite-front-base-01.jpg")
accessory8.photo.attach(io: file24, filename: "img_#{accessory8.id}.jpg")

file25 = open("https://heighten-seeds.s3-us-west-1.amazonaws.com/heighten_accessories/1-tic_toc-product_page_images_2000x2000_1.jpg")
accessory9.photo.attach(io: file25, filename: "img_#{accessory9.id}.jpg")

file26 = open("https://heighten-seeds.s3-us-west-1.amazonaws.com/heighten_accessories/180209_fully_053.jpg")
accessory10.photo.attach(io: file26, filename: "img_#{accessory10.id}.jpg")