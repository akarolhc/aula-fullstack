import './styles.css'
import { Link } from 'react-router-dom'

export default function Header () {
  return (
    <header id="exemplo">
        <h1>Minha Página HTML Básica</h1>
        <nav className='menu'>
            <ul>
                <Link to="/">
                <li>Home</li>
                </Link>
                <Link to="/about">
                <li>Sobre</li>
                </Link>
            </ul>
        </nav>
    </header>
  );
}