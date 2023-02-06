import { useContext } from 'react';
import { hadesLogo } from '../assets';
import { UiContext } from '../context';
import { routesData } from '../data';
import '../styles/navbar.css';

export const Navbar = () => {

    const { setIsScrolling, isScrolling } = useContext(UiContext);
    const navbarScroll = () => {

        (window.scrollY >= 70)
            ? setIsScrolling(true)
            : setIsScrolling(false)
    }

    window.addEventListener('scroll', navbarScroll);

    return (
        <header className={isScrolling ? 'header active' : 'header'}>
            <div className={isScrolling? 'container active': 'container'}>
                <img src={hadesLogo} alt="logo" className='logo' />

                <ul className='nav_menu'>
                    {
                        routesData.map(({ name, path }) => (
                            <li key={name}>
                                <a href={path}>{name}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </header>
    )
}
