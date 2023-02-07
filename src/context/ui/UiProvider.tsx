import { FC, ReactNode, useReducer } from 'react';
import { realmsName } from '../../interfaces';
import { UiContext, uiReducer } from './';

export interface uiState {
    isScrolling: boolean;
    showModal: boolean;
    galleryType: realmsName;
}


const Ui_INITIAL_STATE: uiState = {
    isScrolling: false,
    showModal: false,
    galleryType: ''
}

interface Props {
    children: ReactNode;
}


export const UiProvider: FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(uiReducer, Ui_INITIAL_STATE);

    const setIsScrolling = (value: boolean) => {
        dispatch({ type: '[UI] - setIsScrolling', payload: value });
    }

    const setShowModal = (value: boolean) => {
        dispatch({ type: '[UI] - setShowModal', payload: value });
    }

    const setGalleryType = (value: realmsName) => {
        dispatch({ type: '[UI] - setGalleryType', payload:value });
    }

    return (
        <UiContext.Provider value={{
            ...state,
            setIsScrolling,
            setShowModal,
            setGalleryType

        }}>
            {children}
        </UiContext.Provider>
    )
};