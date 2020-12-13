# @products.each do |product|
#     json.set! product.id do
#         json.extract! product, :id, :name, :type_id, :description, :price
#         #!extract may need to be in a _product.json.jbuilder partial file.
#         #! json.partial! 'product', product: product
#     end
# end

#! same as above but this returns it in an array
json.id @category.id
json.products @products do |product|
    json.id product.id
    json.name product.name
    json.type_id product.type_id
    json.description product.description
    json.price product.price
end
