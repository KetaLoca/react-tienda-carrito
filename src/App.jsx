import { useState } from "react";
import { products as initialProducts } from "./mocks/products.json";
import { Products } from "./components/Products";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useFilters } from "./hooks/filtering";

function App() {
  const [products, setProducts] = useState(initialProducts);
  const { filterProducts, setFilters } = useFilters();
  const filteredProducts = filterProducts(products);

  return (
    <>
      <Header onChange={setFilters} />
      <Products products={filteredProducts} />
      <Footer />
    </>
  );
}

export default App;
