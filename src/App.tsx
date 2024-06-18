import './App.css';
import ProductListContainer from './components/product/list/product-list.container';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <ProductListContainer />
    </Provider>
  );
}

export default App;
