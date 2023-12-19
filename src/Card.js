
export default function Card(props) {
         return (
     <div className={`card ${props.step > props.dataLength - 2 ? 'disappearLeft' : 'appearLeft'}`} id={props.unicName}>

                    <img className="card_image" style={{backgroundColor: props.bgColor}}alt="#" src={props.image}></img>
        <div className="card_info">

        <h1 className="card_title">{props.title}</h1>
        <p className="card_description">{props.description}</p>
        <div className="extra">
            <div className="dots">{props.children}</div>
        <div className="btns">
        {(props.step > 0) && <button className="btn btn_back" onClick={props.prevStep}><img alt="#" className="btn_img" src="left.png"/></button>}
           {(props.step >= 0 && props.step < (props.dataLength - 1)) && <button className="btn btn_forw" onClick={props.nextStep}><img className="btn_img" alt="#" src="right.png"/></button>}
        </div>
        </div>
        </div>
        
        </div>
    )
}