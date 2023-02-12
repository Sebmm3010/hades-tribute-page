import { useContext } from 'react';
import { UiContext } from '../context'
import { routesData } from '../data'
import { useClickOut } from '../hooks';
import "../styles/movileMenu.css";

export const MovileMenu = () => {

    const { showMenu, setShowMenu } = useContext(UiContext);
    const ref = useClickOut(() => setShowMenu(false));


    return (
        <div className='movile_menu' ref={ref}>
            {
                !showMenu
                    ? (
                        <div className="movile_icon" onClick={() => setShowMenu(true)}>
                            <svg viewBox="0 0 32 32" width="32" height="32" stroke="currentColor" fill="currentColor"><path d="M4.7 9.3C4.3 9.3 4 9 4 8.7 4 8.3 4.3 8 4.7 8L27.3 8C27.7 8 28 8.3 28 8.7 28 9 27.7 9.3 27.3 9.3L4.7 9.3ZM4.7 16C4.3 16 4 15.7 4 15.3 4 15 4.3 14.7 4.7 14.7L27.3 14.7C27.7 14.7 28 15 28 15.3 28 15.7 27.7 16 27.3 16L4.7 16ZM4.7 22.7C4.3 22.7 4 22.4 4 22 4 21.6 4.3 21.3 4.7 21.3L27.3 21.3C27.7 21.3 28 21.6 28 22 28 22.4 27.7 22.7 27.3 22.7L4.7 22.7Z" /></svg>
                        </div>
                    )
                    : (
                        <div className="movile_routes">
                            {
                                routesData.map(route => (
                                    <a key={route.name} href={route.path} onClick={() => setShowMenu(false)}>{route.name}</a>
                                ))
                            }
                        </div>
                    )
            }
        </div>
    )
}
