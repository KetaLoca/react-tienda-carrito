import "./Products.css";
import { products as initialProducts } from "../mocks/products.json";
import { AddToCartIcon } from "./Icons";
import { useState } from "react";
import { useFilters } from "../hooks/useFilters";

export function Products() {
  const [products] = useState(initialProducts);
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(products);

  return (
    <main className="products">
      <ul>
        {filteredProducts.slice(0, 25).map((product) => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div>
              <strong>
                {product.title} - ${product.price}
              </strong>
            </div>
            <div>
              <button>
                <AddToCartIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
