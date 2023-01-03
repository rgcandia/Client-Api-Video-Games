import './GenresButton.css';
import ButtonHome from '../ButtonHome/ButtonHome.jsx';
import {useDispatch,useSelector} from 'react-redux';
import {setModal,setFilter} from '../../redux/action/index.js'
export default function GenresButton({genres}){
    const {filter} = useSelector(state=>state);
    const dispatch = useDispatch();
    function buttonHandler(text){
        let value = filter.filter(e=>e.genres.includes(text));
        dispatch(setFilter(value));
        dispatch(setModal(false));
    }
    return(<div className='genres-button'>
        {genres.map(e=>{
            return <ButtonHome text={e.name} key={e.id} buttonHandler={buttonHandler}/>
        })}
    </div>);
}