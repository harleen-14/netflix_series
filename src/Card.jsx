
function Card(props){
    return(
    <>
        <div className="cards">
        <div className="card">
        <img src={props.imgsrc} alt="Img" className="card_img" />
        <div className="card_info">
        <span className="card_cat">{props.title}</span>
        <h3 className="card_title" >{props.sname} </h3>
 
        <a href= {props.link} target="card_link">

            <button>watch now </button>
            
            <div>
                <span> ,</span>
            </div>
        </a>
        </div>
        </div>
        </div>
    </>
    );
}
export default Card;