import { useDispatch, useSelector } from 'react-redux';
import './Filter.css';
import {setFilter,setPaginaActual,setModal,setModalRating} from '../../redux/action/index.js';
import ButtonHome from '../ButtonHome/ButtonHome.jsx';
import { useNavigate } from 'react-router-dom';
function Filter (){
    const navigate = useNavigate();
    function checkIfValidUUID(str) {
        const regexExp = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
      
        return regexExp.test(str);
      }
    const dispatch = useDispatch();
    const {allGames,filter} = useSelector(state=>state)
    function buttonHandler(e){
       dispatch(setPaginaActual(1)) 
       switch (e) {
        case "All Games":
            dispatch(setFilter(allGames));
            break;
        case "My Games":
            let games = allGames.filter(e=>checkIfValidUUID(e.id));
            dispatch(setFilter(games));
            break;
         case "Genres":
            dispatch(setModal(true));
            break;  
         case "A-Z":
           const FilterAZ= JSON.parse(JSON.stringify(filter));//creo una copia de filter
           
            FilterAZ.sort((a,b)=>{
                if(a.name.toLowerCase()<b.name.toLowerCase()){return -1}
                if(a.name.toLowerCase()>b.name.toLowerCase()){return 1}
                return 0;
            });
            dispatch(setFilter(FilterAZ))
            break;
           case "Z-A":
            const FilterZA =JSON.parse(JSON.stringify(filter)); //creo una copia de filter 
            FilterZA.sort((a,b)=>{
                if(a.name.toLowerCase()<b.name.toLowerCase()){return 1}
                if(a.name.toLowerCase()>b.name.toLowerCase()){return -1}
                return 0;
            }); 
            dispatch(setFilter(FilterZA));
            break;
         case 'Create Game':
             navigate('/create');
             break;
         case 'Rating':
            dispatch(setModalRating(true))
            break;    
        default:
            break;
       }
            
            
        
    }
    return (<div className='filter'>
        <ButtonHome text="All Games" buttonHandler={buttonHandler} />
        <ButtonHome text="My Games" buttonHandler={buttonHandler}/>
        <ButtonHome text='Create Game' buttonHandler={buttonHandler}/>
        <ButtonHome text="Genres" buttonHandler={buttonHandler}/>
        <ButtonHome text="Rating" buttonHandler={buttonHandler}/>
        <ButtonHome text="A-Z" buttonHandler={buttonHandler}/>
        <ButtonHome text="Z-A" buttonHandler={buttonHandler}/>
      
        
    </div>);
}
export default Filter;