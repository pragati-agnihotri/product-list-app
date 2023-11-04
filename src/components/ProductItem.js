import React from 'react';
import styled from 'styled-components';

const ProductCard = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  display: inline-block;
  width: 250px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  img {
    max-width: 100%;
    height: auto;
  }

  h3 {
    font-size: 1.2rem;
    margin: 10px 0;
  }

  p {
    font-size: 1.3rem;
    color: #333;
    margin: 0;
  }

  p.price {
    font-weight: bold;
    color: #007700;
  }
`;

const ProductItem = ({ product }) => {
  return (
    <ProductCard>
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p className="price">${product.price}</p>
    </ProductCard>
  );
};

export default ProductItem;
