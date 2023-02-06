import { createContext } from 'react';


interface ContextProps {
    isScrolling:boolean;
    showModal:boolean;

    //* Metodos
    setIsScrolling: (value: boolean) => void;
    setShowModal: (value: boolean) => void;
}


export const UiContext = createContext({} as ContextProps );