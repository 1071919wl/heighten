# http://geekhmer.github.io/blog/2015/04/29/ruby-on-rails-getting-started-with-jbuilder/

# json.categories @categories do |category|
#     json.category category.category
# end

#! same as above but this doesnt returns it in an array
@categories.each do |category|
    json.set! category.id do
        json.extract! category, :category
        #!extract may need to be in a _product.json.jbuilder partial file.
        #! json.partial! 'product', product: product
    end
end


