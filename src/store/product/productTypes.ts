import { FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS } from './productActions';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export interface ProductState {
  loading: boolean;
  products: Product[];
  error: string | null;
}

interface FetchProductsRequest {
  type: typeof FETCH_PRODUCTS_REQUEST;
}

interface FetchProductsSuccess {
  type: typeof FETCH_PRODUCTS_SUCCESS;
  payload: Product[];
}

interface FetchProductsFailure {
  type: typeof FETCH_PRODUCTS_FAILURE;
  payload: string;
}

export type ProductActionTypes = FetchProductsRequest | FetchProductsSuccess | FetchProductsFailure;
