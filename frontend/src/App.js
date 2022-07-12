import './App.css';
import Layout from './components/layout';
import {Route,Routes} from "react-router-dom";
import HomePage from './pages';
import ItemPage from './pages/itemPage';
import CategoryPage from './pages/categoryPage';
import LoginPage from './pages/loginPage';
import CheckoutPage from './pages/checkout';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index path="home" element={<HomePage/>}/>
            <Route exact path="category/:categoryId" element={<CategoryPage />}/>
            <Route  path="items/:itemId" element={<ItemPage/>}/>
            <Route  path="login" element={<LoginPage/>}/>
            <Route  path="cart" element={<CheckoutPage/>}/>
          </Route>
        </Routes>   
    </div>
  );
}



export default App;
