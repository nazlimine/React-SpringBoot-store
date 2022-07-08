import './App.css';
import NavbarBootstrap from './components/header';
import { Container ,Content, Header,Sidebar} from 'rsuite';
import CustomCarousel from './components/carousel';
import CustomPanel from './components/panel';
import CustomCard from './components/card';

import { Routes, Route } from "react-router-dom";
import HomePage from './pages';

function App() {
  return (
    <div className="App">
  
      <Container>
        <Header>
          <NavbarBootstrap></NavbarBootstrap>
        </Header>
        <Routes>
            <Route path="/"    element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="user" element={<User />} />
            <Route path="cart" element={<Cart />} />
        </Routes>
       
    </Container>
    </div>
  );
}

function Home() {
  return (
    <>
      <HomePage></HomePage>
    </>
  );
}

function User() {
  return (
    <>
      <Container>
      <Content>
        <CustomCarousel></CustomCarousel>
        <CustomPanel></CustomPanel>
      </Content>

    </Container>
    </>
  );
}

function Cart() {
  return (
    <>
    <Container>
      <Content>
        <CustomCarousel></CustomCarousel>
      </Content>

    </Container>
    </>
  );
}


export default App;
