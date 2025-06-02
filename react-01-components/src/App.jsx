import { Footer } from './pages/footer/footer';
import { Navbar } from './pages/navbar/navbar';
import { Home } from './pages/home/home';
import './App.css'
import Products from './pages/products/products';

function App() {



  const myJsx = (
    <>
      <Navbar title="El dia de harry potter" />
      <Home name="Myrtle la llorona" howartsHome="Revenclaw" />
      <Home name="Serch snape" howartsHome="Slytherin" />
      <Products />
      <Footer cohorte={"Ch 54"}></Footer>

    </>
  );

  return myJsx;

}

export default App
