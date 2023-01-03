import { GET_GAMES, GET_GAME_ID,GET_GAME_NAME,GET_GENRES,SET_CURRENT_GAMES, SET_FILTER ,SET_MODAL,SET_PAGINA_ACTUAL,SET_MODAL_RATING} from "../types";
const initialState = {
    allGames:null,
    filter:null,
    currentGames:null,
    selectedGame:null,
    paginaActual:1,
    juegosPorPagina:15,
    modal:false,
    genres:null,
    modalRating:false,
}
 function rootReducer(state=initialState,action){
    switch(action.type){
        case GET_GAMES:
            
            return {
                ...state,
                allGames:action.payload,
                filter:action.payload,
                
            }
        case GET_GAME_ID:
            return{
                ...state,
                selectedGame:action.payload,
            }    
        case GET_GAME_NAME:
            return{
                ...state,
                filter:action.payload,
            }    
        case SET_CURRENT_GAMES:
            return{
                ...state,
                currentGames:action.payload,
            }    
        case SET_FILTER:
            return{
                ...state,
                filter:action.payload,
            }   
        case SET_PAGINA_ACTUAL:
            return{
                ...state,
                paginaActual:action.payload,
            }     
        case SET_MODAL:
            return{
                ...state,
                modal:action.payload,
            }    
        case GET_GENRES:
            return{
                ...state,
                genres:action.payload,
            }
        case SET_MODAL_RATING:
            return{
                ...state,
                modalRating:action.payload,
            }

    default:return state;    
    };
};

export default rootReducer;