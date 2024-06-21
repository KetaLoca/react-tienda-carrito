import { Filters } from "./Filters.jsx";
export function Header({onChange}) {
  return (
    <header>
      <h1>REACT SHOP🛒</h1>
      <Filters onChange={onChange} />
    </header>
  );
}
