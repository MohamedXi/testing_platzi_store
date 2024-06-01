import React from 'react';
import { Provider } from 'react-redux';
import ProductList from './components/ProductList';
import store from './store';

const App: React.FC = () => (
  <Provider store={store}>
    <div className="App">
      <h1>Fake Store</h1>
      <ProductList />
    </div>
  </Provider>
);

export default App;
