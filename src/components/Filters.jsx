import "./Filters.css";
export function Filters() {
  return (
    <section className="filters">
      <div>
        <label htmlFor="price">Price</label>
        <input type="range" id="price" min="0" max="1000" />
      </div>
      <div>
        <label htmlFor="category">Categoría</label>
        <select id="category">
          <option value="all">Todas</option>
          <option value="smartphones">Móviles</option>
          <option value="laptops">Portátiles</option>
        </select>
      </div>
    </section>
  );
}
