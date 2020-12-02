import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Under_header from './components/under_header/under_header';
import Search from './components/search/search';
import Class from './containers';
import Products from './components/products/products';



function App() {
  return (
    <div className="App">
      <Header />
      <Under_header />
      <Search />
      {/* <Class /> */}
      <Products />
    </div>
  );
}

export default App;
