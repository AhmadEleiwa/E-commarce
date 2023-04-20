import './style.css'
const Circle = props => {
    return <div className='circle'>
        <div className='body'>
            {props.icon}
        </div>
    </div>
}

export default Circle