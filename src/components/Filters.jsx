import { useState, useId } from "react";
import "./Filters.css";

export function Filters({ onChange }) {
  const [minPrice, setMinPrice] = useState(0);
  const minPriceFiltrerId = useId();
  const categoryFilterId = useId();

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value);
    onChange((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    onChange((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFiltrerId}>Precio mínimo</label>
        <input
          onChange={handleChangeMinPrice}
          type="range"
          id={minPriceFiltrerId}
          min="0"
          max="1000"
        />
        <span>${minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Categoría</label>
        <select onChange={handleChangeCategory} id={categoryFilterId}>
          <option value="all">Todas</option>
          <option value="smartphones">Móviles</option>
          <option value="laptops">Portátiles</option>
          <option value="fragrances">Fragancias</option>
          <option value="skincare">Cuidado de la piel</option>
          <option value="groceries">Groceries</option>
          <option value="home-decoration">Decoración de hogar</option>
        </select>
      </div>
    </section>
  );
}
