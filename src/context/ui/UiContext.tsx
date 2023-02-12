import { createContext } from 'react';
import { realmsName } from '../../interfaces/interfaces';


interface ContextProps {
    isScrolling: boolean;
    showModal: boolean;
    galleryType: string;
    showMenu: boolean;

    //* Metodos
    setIsScrolling: (value: boolean) => void;
    setShowModal: (value: boolean) => void;
    setGalleryType: (value: realmsName) => void;
    setShowMenu: (value: boolean) => void;
}


export const UiContext = createContext({} as ContextProps);