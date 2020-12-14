json.extract! @product, :id, :name, :type_id, :description, :price
json.extract! @product.category, :category
json.photoUrl url_for(@product.photo)
