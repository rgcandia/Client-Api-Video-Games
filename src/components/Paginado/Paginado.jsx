import './Paginado.css'
import { useEffect } from "react";
import {setPaginaActual} from '../../redux/action/index.js';
import {useDispatch, useSelector} from 'react-redux';
import { setCurrentGames} from "../../redux/action/index.js";
import Button from '../Button/Button.jsx'
function Paginado(){
    const dispatch = useDispatch();
    const {paginaActual,juegosPorPagina} = useSelector(state=>state);
    let ultimoIndex = paginaActual * juegosPorPagina;
    let  primerIndex = ultimoIndex - juegosPorPagina;
    const {filter} = useSelector(state=>state);
    let value = filter.slice(primerIndex,ultimoIndex);

    useEffect(()=>{
    dispatch(setCurrentGames(value))
        
    },[paginaActual,filter,dispatch]);
    
   

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