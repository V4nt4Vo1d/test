
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo glow">FAHXEY</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/live">Live</Link>
        <Link to="/clips">Clips</Link>
      </div>
    </nav>
  )
}
