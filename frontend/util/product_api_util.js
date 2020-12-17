export const fetchProduct = (productId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/products/${productId}`
    })
};

export const fetchProducts = () => {
    return $.ajax({
        metod: 'GET',
        url: '/api/products'
    })
}