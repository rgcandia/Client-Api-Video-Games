

import { SET_SELECTED_GAME,GET_GENRES,GET_GAMES,GET_GAME_ID,GET_GAME_NAME ,SET_CURRENT_GAMES,SET_FILTER,SET_MODAL,SET_PAGINA_ACTUAL,SET_MODAL_RATING} from "../types"
const URL_SERVER = 'https://server-api-video-game-production.up.railway.app'
export  function getGames (dispatch){
  fetch(`${URL_SERVER}/videogames`)
  .then(response=>response.json()) 
  .then(response=>dispatch({type:GET_GAMES,payload:response}))
  .catch(error=>{console.log(error)}) 
 
}


export function setCurrentGames(value){

  return {
    type:SET_CURRENT_GAMES,
    payload:value,
  }
}

export function getGameId(id,dispatch){
  fetch(`${URL_SERVER}/videogames/${id}`)
  .then(response=>response.json())
  .then(response=>dispatch({type:GET_GAME_ID,payload:response}))
  .catch(error=>{console.log(error)})
}

export function getGameName(name,dispatch){
fetch(`${URL_SERVER}/videogames?name=${name}`)
.then(response=>response.json())
.then(response=>dispatch({type:GET_GAME_NAME,payload:response}))
.catch(error=>{console.log(error)})
}

export function setFilter(value){
return{
  type:SET_FILTER,
  payload:value,
}
}
export function setPaginaActual(value){
  return {
    type:SET_PAGINA_ACTUAL,
    payload:value,
  }
}

export function setModal(value){
  return{
    type:SET_MODAL,
    payload:value,
  }
}
export function getGenres(dispatch){
  fetch(`${URL_SERVER}/genres`)
  .then(response=>response.json())
  .then(response=>dispatch({type:GET_GENRES,payload:response}))
  .catch(error=>{console.log(error)})
}

export function setModalRating (value){

  return{
    type:SET_MODAL_RATING,
    payload:value,
  }
}

export function setSelectedGame(value){
  return {
    type: SET_SELECTED_GAME,
    payload:value,
  }
}