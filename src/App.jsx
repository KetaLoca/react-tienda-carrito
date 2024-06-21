import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { products } from "./mocks/products.json";
import { Products } from "./components/Products";

function App() {
  return <Products products={products} />;
}

export default App;
