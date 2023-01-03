import './Ratings.css';
export default function Ratings({ratings}){

    return(<div className='ratings'>
        Ratings : <hr/>
        {ratings.map(e=>{
           return(<label key={e.id} >
            {e.title}  {e.percent}%
           </label>)
        })}
    </div>);
}