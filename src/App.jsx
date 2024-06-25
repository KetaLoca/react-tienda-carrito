import { Products } from "./components/Products";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Cart } from "./components/Cart";

function App() {
  return (
    <>
      <Header />
      <Cart />
      <Products />
      <Footer />
    </>
  );
}

export default App;
