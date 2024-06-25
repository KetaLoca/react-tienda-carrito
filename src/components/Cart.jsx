import "./Cart.css"
import { useId } from "react";
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "./Icons";

export function Cart() {
  const cartCheckBoxId = useId();

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckBoxId}>
        <CartIcon />
      </label>
      <input id={cartCheckBoxId} type="chechbox" hidden />

      <aside className="cart">
        <ul>
          <li>
            <img
              src="https://static.nationalgeographic.es/files/styles/image_3200/public/75552.ngsversion.1422285553360.jpg?w=1900&h=1267"
              alt="Gatito"
            />
            <div>
              <strong>Gatito travieso</strong> - $2299
            </div>
            <footer>
              <small>Qty: 1</small>
              <button>+</button>
            </footer>
          </li>
        </ul>
        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
