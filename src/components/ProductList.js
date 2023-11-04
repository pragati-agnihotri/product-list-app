import React, { useState } from 'react';
import ProductItem from './ProductItem';
import Filters from './Filters';
import Pagination from './Pagination';
import { productList } from '../data/product.js';

function ProductList() {
  const [products, setProducts] = useState(productList);
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

    const filteredProducts = products.filter((product) => {
        return (
            product.title.toLowerCase().includes(filter.toLowerCase()) ||
            product.price.toString().includes(filter)
        );
    });

  const sortedProducts = sort
    ? [...filteredProducts].sort((a, b) =>
        sort === 'price' ? a.price - b.price : 0
      )
    : filteredProducts;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div>
      <Filters setFilter={setFilter} setSort={setSort} />
      {currentProducts && currentProducts.length> 0 ? currentProducts.map((product) => (
        <ProductItem key={product.id} product={product} />
      )) : <p style={{
          fontSize: '2rem'
      }}>Products NOT Available !</p>}
      <Pagination
        currentPage={currentPage}
        productsPerPage={productsPerPage}
        totalProducts={sortedProducts.length}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
export default ProductList;
