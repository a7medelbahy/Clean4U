const PlansBox = (props) => {
    return ( 
        <div className="col-md-6" data-aos="zoom-in" data-aos-duration="1000">
            <div className="plans-box d-flex flex-column gap-4 align-items-center text-center justify-content-center bg-white rounded-4 p-4">
                <div className="plan-tile d-flex flex-column gap-2">
                    <h3 className="fw-bolder">{props.plansItem.title}</h3>
                    <h2 className="fw-bold display-4">{props.plansItem.icon}</h2>
                    <h5>{props.plansItem.price}</h5>
                </div>
                <ul className="plan-features d-flex flex-column gap-2">
                    {props.plansItem.features.map(featItem =>{
                        return (
                            <li key={featItem.id}><i className="fa-solid fa-check me-2"></i>{featItem.feature}</li>
                        )
                    })}
                </ul>
                <button className="main-btn">Book Now</button>
            </div>
        </div>
     );
}
 
export default PlansBox;