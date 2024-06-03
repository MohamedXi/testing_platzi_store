import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { ProductState } from '../store/product/productTypes';
import ProductList from './ProductList';

const mockStore = configureStore([]);

describe('ProductList', () => {
  test('renders loading state', () => {
    const initialState: ProductState = { loading: true, products: [], error: null };
    const store = mockStore({ products: initialState });

    render(
      <Provider store={store}>
        <ProductList />
      </Provider>
    );

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('renders products', () => {
    const initialState: ProductState = {
      loading: false,
      products: [{ id: 1, title: 'Product 1', price: 100, description: '', category: '', image: '' }],
      error: null,
    };
    const store = mockStore({ products: initialState });

    render(
      <Provider store={store}>
        <ProductList />
      </Provider>
    );

    expect(screen.getByText('Product 1')).toBeInTheDocument();
  });

  test('renders error state', () => {
    const initialState: ProductState = { loading: false, products: [], error: 'Error fetching products' };
    const store = mockStore({ products: initialState });

    render(
      <Provider store={store}>
        <ProductList />
      </Provider>
    );

    expect(screen.getByText(/error fetching products/i)).toBeInTheDocument();
  });
});
