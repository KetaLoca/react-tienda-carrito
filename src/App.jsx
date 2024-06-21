import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { products as initialProducts } from "./mocks/products.json";
import { Products } from "./components/Products";

function App() {
  const [products] = useState(initialProducts);
  const [filters, setFilters] = useState({ category: "all", minPrice: 0 });
  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category == "all" || product.category == filters.category)
      );
    });
  };
  return <Products products={products} />;
}

export default App;
