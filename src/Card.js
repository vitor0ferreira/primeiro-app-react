
import './styles/card.css'

export default function Card(props){
    return(
    <div>
        <h1 className='title'>{props.titulo}</h1>
        <p className='description'>{props.description}</p>
    </div>
    )
}