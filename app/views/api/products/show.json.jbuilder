json.extract! @product, :id, :name, :type_id, :description, :price
json.extract! @product.category, :category
json.photoUrl url_for(@product.photo)


#!grabbing reviews for a specific product
json.reviews @product.reviews do |review|
    json.id review.id
    json.reviewer review.reviewer
    json.score review.score
    json.user_id review.user_id
    json.review review.review
json.product_id review.product_id

end