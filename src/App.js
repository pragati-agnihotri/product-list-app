import logo from './logo.svg';
import './App.css';
import GlobalStyles from './styles/GlobalStyles'
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
       <div>
      <GlobalStyles />
      <ProductList />
    </div>
    </div>
  );
}

export default App;
