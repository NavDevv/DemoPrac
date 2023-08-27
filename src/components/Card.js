// Card is term meaning a wrapper
import './Card.css'

function Card(props) {
    const classes = 'card ' + props.className;
    return (<div className={classes}>{props.children}</div>)
}

export default Card;
// customer wrapper for the css around the code and file 