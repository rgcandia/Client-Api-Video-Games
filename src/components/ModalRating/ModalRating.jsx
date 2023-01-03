import { useDispatch, useSelector } from 'react-redux';
import {setFilter, setModalRating} from '../../redux/action/index.js'
import ButtonHome from  '../ButtonHome/ButtonHome.jsx'
import './ModalRating.css'

export default function ModalRating(){
    const {filter} = useSelector(state=>state)
    const dispatch = useDispatch();
    function handleButtonClose (){
        dispatch(setModalRating(false))
    }
function buttonHandler (text){
     console.log(text)
      const Filter =   JSON.parse(JSON.stringify(filter));
      Filter.sort((a,b)=>{
         let indexA,indexB ;
         a.rating?.forEach((element,index)=> {
            if(element.title===text){indexA=index}
         });

         b.rating?.forEach((element,index)=> {
            if(element.title===text){indexB=index}
         });

         if(indexA===undefined && indexB === undefined){return 0}
         else if(indexA===undefined){return 1} 
         else if(indexB===undefined){return -1}
          else if(a.rating[indexA].percent<b.rating[indexB].percent){return 1}
          else if(a.rating[indexA].percent>b.rating[indexB].percent){return -1}
          else{return 0}


      });
      dispatch(setFilter(Filter))
      dispatch(setModalRating(false))
}
    
    return (<div className='modal-ratings'>
        <button onClick={handleButtonClose}>X</button>
        <h1 className='texto'>Filtra Por Rating </h1>
        <ButtonHome text='exceptional' buttonHandler={buttonHandler}/>
        <ButtonHome text='recommended'  buttonHandler={buttonHandler}/>
        <ButtonHome text='meh'  buttonHandler={buttonHandler}/>
        <ButtonHome text='skip'  buttonHandler={buttonHandler}/>
    </div>);
}