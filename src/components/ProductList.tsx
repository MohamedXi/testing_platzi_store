import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsRequest } from '../store/product/productActions';
import { RootState } from '../store/rootReducer';
import './ProductList.css';

const ProductList: React.FC = () => {
  const dispatch = useDispatch();
  const { loading, products, error } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchProductsRequest());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  console.log(products);

  return (
    <ul className="product-list">
      {products.map((product) => (
        <li key={product.id} className="product-item">
          <div className="product-info">
            <h3>{product.title}</h3>
            <p>{product.price} $</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
