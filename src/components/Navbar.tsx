import { useContext } from 'react';
import { hadesLogo } from '../assets';
import { UiContext } from '../context';
import { routesData } from '../data';
import '../styles/navbar.css';
import { useWindowSize } from '../hooks/useWindowSize';

export const Navbar = () => {

    const { setIsScrolling, isScrolling } = useContext(UiContext);
    const { width }= useWindowSize();
    const navbarScroll = () => {

        (window.scrollY >= 70)
            ? setIsScrolling(true)
            : setIsScrolling(false)
    }

    window.addEventListener('scroll', navbarScroll);
    const movile = width > 768 ? false : true;
    return (
        <header className={isScrolling && !movile ? 'header active' : 'header'}>
            <div className={isScrolling && !movile ? 'container active' : 'container'}>
                <img src={hadesLogo} alt="logo" className='logo' loading='lazy' />

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
