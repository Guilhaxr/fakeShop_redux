import ProductDetail from './containers/ProductDetail'
import ProductList from './containers/ProductList'
import Header from "./containers/Header";
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/'  element={ <ProductList />} />
          <Route path='/product/:productId'  element={<ProductDetail/>} />
          <Route> 404 Page Not Found</Route>
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
