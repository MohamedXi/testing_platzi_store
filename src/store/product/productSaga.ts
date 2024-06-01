import axios from 'axios';
import { CallEffect, PutEffect, call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_PRODUCTS_REQUEST, fetchProductsFailure, fetchProductsSuccess } from './productActions';
import { Product } from './productTypes';

function* fetchProducts(): Generator<CallEffect | PutEffect, void, any> {
  try {
    const response = yield call(axios.get, 'https://fakestoreapi.com/products');
    const products: Product[] = response.data;
    yield put(fetchProductsSuccess(products));
  } catch (error) {
    if (error instanceof Error) {
      yield put(fetchProductsFailure(error.message));
    } else {
      yield put(fetchProductsFailure('An unknown error occurred.'));
    }
  }
}

export default function* productSaga() {
  yield takeLatest(FETCH_PRODUCTS_REQUEST, fetchProducts);
}
