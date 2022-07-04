import './App.css';
import NavbarBootstrap from './components/header';
import { Container ,Content, Header,Sidebar} from 'rsuite';
import CustomCarousel from './components/carousel';
import CustomPanel from './components/panel';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
  
      <Container>
        <Header>
          <NavbarBootstrap></NavbarBootstrap>
        </Header>
        <Routes>
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
      <Container>
      <Content>
        <CustomCarousel></CustomCarousel>
        <CustomPanel></CustomPanel>
      </Content>

    </Container>
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
