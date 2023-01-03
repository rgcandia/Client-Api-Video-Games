import './Genres.css';
function  Genres({genres}){
    return (
        <div className="genres">
            {genres.map(e=>{
               if(typeof e ==="string"){return <label key={e}>{e}</label>}  
               else{return <label key={e.name}>{e.name}</label>}   
               
            })}
        </div>
    );
}
export default Genres;