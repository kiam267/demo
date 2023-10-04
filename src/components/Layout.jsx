import { NavLink } from "react-router-dom"

export default function Layout() {
  return (
     <div>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>contact</NavLink>
    </div>
  )
}
