const ProductsReducer = (state, action) => {
  let product;
  if (action.type === 'set-products') {
    return { products: [...action.productList] };
  }
  if (action.type === 'filter') {
    const category = action.category.replace(' ', '-').replace("'", '');
    document.querySelectorAll('.category-item').forEach((categoryItem) => {
      if (categoryItem.classList.contains(category)) {
        categoryItem.classList.add('active-category');
        categoryItem.classList.add('font-weight-bold');
      } else {
        categoryItem.classList.remove('active-category');
        categoryItem.classList.remove('font-weight-bold');
      }
    });
    if (category !== 'All') {
      document.querySelectorAll('.product').forEach((item) => {
        product = item;
        if (product.classList.contains(category)) {
          product.style.display = 'block';
        } else {
          product.style.display = 'none';
        }
      });
    } else {
      document.querySelectorAll('.product').forEach((item) => {
        product = item;
        product.style.display = 'block';
      });
    }
    return { products: [...state.products] };
  }
  return { products: [...state.products] };
};

export default ProductsReducer;
