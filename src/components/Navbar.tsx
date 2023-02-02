import { hadesLogo } from '../assets';
import '../styles/navbar.css';

export const Navbar = () => {
    return (
        <header className='header'>
            <img src={hadesLogo} alt="logo" className='logo' />

            <ul className='nav_menu'>
                <li>Inicio</li>
                <li>Galleria</li>
                <li>Caracteristicas</li>
                <li>Reviews y premios</li>
                <li>Personajes</li>
            </ul>
        </header>
    )
}
