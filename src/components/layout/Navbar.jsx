import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="w-full flex py-2 px-8">
      <div>
        <h1>Portfólio</h1>
      </div>
      <ul className="w-full flex items-center justify-end gap-4 px-8">
        <li><Link to="/" className="hover:text-[var(--accent-color)]">Home</Link></li>
        <li><Link to="/" className="hover:text-[var(--accent-color)]">Blog</Link></li>
        <li><Link to="/" className="hover:text-[var(--accent-color)]">Contato</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
