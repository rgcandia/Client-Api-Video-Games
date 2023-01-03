import './ButtonHome.css'
export default function Button ({text,buttonHandler}){
    return(<div className='button-home' onClick={()=>{buttonHandler(text)}}>
        <h3 className='texto'>{text}</h3>
    </div>);
}