import './Paginado.css'
import { useEffect } from "react";
import {setPaginaActual} from '../../redux/action/index.js';
import {useDispatch, useSelector} from 'react-redux';
import { setCurrentGames} from "../../redux/action/index.js";
import Button from '../Button/Button.jsx'
function Paginado(){
    const dispatch = useDispatch();
    const {paginaActual,juegosPorPagina} = useSelector(state=>state);
    const {filter} = useSelector(state=>state);
    let ultimoIndex = paginaActual * juegosPorPagina;
    let  primerIndex = ultimoIndex - juegosPorPagina;
    
    
    useEffect(()=>{

   if(Array.isArray(filter)){
    let value = filter.slice(primerIndex,ultimoIndex);
    dispatch(setCurrentGames(value))
   }else{
    dispatch(setCurrentGames(null))
   }
        
    },[paginaActual,filter,dispatch,primerIndex,ultimoIndex]);
    
   

    function buttonHandler(e){
        switch(e){
            case "Siguiente":
             if(paginaActual<filter.length/juegosPorPagina){
                
                dispatch(setPaginaActual(paginaActual+1))
             }
             break;
            case "Volver":
                if(paginaActual>1){
                    
                    dispatch(setPaginaActual(paginaActual-1))
                }
                break; 
            default:    
                
        }
    
        
    }

    return(
        <div className="paginado">
            <Button texto="Volver" buttonHandler={buttonHandler}/>
            <h1>Página {paginaActual}  de  {Math.ceil(filter.length/juegosPorPagina)}</h1>
            <Button texto="Siguiente" buttonHandler={buttonHandler}/>
        </div>
    );
}
export default Paginado;