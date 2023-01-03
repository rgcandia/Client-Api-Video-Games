import './Ratings.css';
export default function Ratings({ratings}){

    return(<div className='ratings'>
        Ratings : <hr/>
        {ratings.map(e=>{
           return(<div key={e.id} className='rating'>
            {e.title}  {e.percent}%
           </div>)
        })}
    </div>);
}