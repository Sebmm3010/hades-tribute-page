import { uiState } from './';


type uiActionType = 
    | { type: '[UI] - setIsScrolling', payload: boolean }
    | { type: '[UI] - setShowModal', payload: boolean } 


export const uiReducer = ( state: uiState, action: uiActionType ): uiState => {

   switch (action.type) {
      case '[UI] - setIsScrolling':
         return {
            ...state,
            isScrolling:action.payload
          }
       case '[UI] - setShowModal':
           return {
               ...state,
               showModal: action.payload
           }
       default:
          return state;
   }

}