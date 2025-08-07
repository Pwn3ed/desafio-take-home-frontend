import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <div className="flex flex-row bg-emerald-500 p-3 items-center justify-around">
      <Link to='/'><p>Homepage</p></Link>
    </div>
  )
}
