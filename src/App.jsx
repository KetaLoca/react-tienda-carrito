import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { products as initialProducts } from "./mocks/products.json";
import { Products } from "./components/Products";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { FiltersContext } from "./context/filters";

function useFilters() {
  // const [filters, setFilters] = useState({ category: "all", minPrice: 0 });
  const filters = useContext(FiltersContext);

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category == "all" || product.category == filters.category)
      );
    });
  };
  return { filterProducts, setFilters:()=>{} };
}

function App() {
  const [products] = useState(initialProducts);
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
