import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css"

export default function Navigation() {
  const checkActive = ({ isActive }) => {
    return (clsx(css.link, isActive && css.active))
  }
  return (
    <header className={css.header}>
    <ul className={css.navigation}>
      <li className={css.navigationItem}><NavLink className={checkActive} to={'/'}>Home</NavLink></li>
      <li className={css.navigationItem}><NavLink className={checkActive} to={'/movies'}>Movies</NavLink></li>
      </ul>
    </header>
  )
}