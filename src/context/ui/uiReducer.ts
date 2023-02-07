import { realmsName } from '../../interfaces';
import { uiState } from './';


type uiActionType =
   | { type: '[UI] - setIsScrolling', payload: boolean }
   | { type: '[UI] - setShowModal', payload: boolean }
   | { type: '[UI] - setGalleryType', payload:realmsName }


export const uiReducer = (state: uiState, action: uiActionType): uiState => {

   switch (action.type) {
      case '[UI] - setIsScrolling':
         return {
            ...state,
            isScrolling: action.payload
         }
      case '[UI] - setShowModal':
         return {
            ...state,
            showModal: action.payload
         }

      case '[UI] - setGalleryType':
         return{
            ...state,
            galleryType:action.payload
         }
      default:
         return state;
   }

}