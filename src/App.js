import ProductDetail from './containers/ProductDetail'
import ProductsList from './containers/ProductsList'
import Header from "./containers/Header";
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact component={ProductsList} />
          <Route path='/product/:productId' exact component={ProductDetail} />
          <Route> 404 Page Not Found</Route>
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
