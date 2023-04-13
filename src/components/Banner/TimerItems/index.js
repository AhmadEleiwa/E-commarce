import './style.css'
const TimersItems = props => {
    return <div className="timer-items">
        <div className="item" >
            <p>{props.timeAsList[0]}</p>
            <p>Houres</p>
        </div>

        <div className="item" >
            <p>{props.timeAsList[1]}</p>
            <p>Days</p>
        </div>

        <div className="item" >
            <p>{props.timeAsList[2]}</p>
            <p>Minuts</p>
        </div>

        <div className="item" >
            <p>{props.timeAsList[3]}</p>
            <p>Seconds</p>
        </div>
    </div>
}

export default TimersItems