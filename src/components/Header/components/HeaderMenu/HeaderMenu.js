import styles from "./HeaderMenu.module.scss";
import { NavLink } from "react-router-dom";

function HeaderMenu({ setWishlistDisplay }) {
  return (
    <ul className={`${styles.MenuContainer} card p-20`}>
      <li>
        <NavLink to="/admin">Admin</NavLink>
      </li>
      <li onClick={() => setWishlistDisplay(true)}>Wishlist</li>
      {/* <li>Connexion</li> */}
    </ul>
  );
}

export default HeaderMenu;
