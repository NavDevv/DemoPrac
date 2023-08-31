import '../index.css'

function DisplayData(props) {
    return (
        <div>
            <ul id="concepts">
                <li className="concept">
                    <img src={props.data[0].image} />
                    <h2>{props.data[0].title}</h2>
                    <p>{props.data[0].description}</p>
                </li>
                <li className='concept'>
                    <img src={props.data[1].image} />
                    <h2>{props.data[1].title}</h2>
                    <p>{props.data[1].description}</p>
                </li>
                <li className='concept'>
                    <img src={props.data[1].image} />
                    <h2>{props.data[1].title}</h2>
                    <p>{props.data[1].description}</p>
                </li>
            </ul>
        </div>
    )


}

export default DisplayData;