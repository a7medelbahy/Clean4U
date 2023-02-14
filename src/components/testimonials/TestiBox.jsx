const TestiBox = (props) => {
  return (
    <div className="testi-box p-5 rounded-4 bg-white">
      <div className="border-bottom">
        <i className="fa-solid fa-quote-left mb-3 display-6"></i>
        <p className="fw-bold">{props.clientItem.review}</p>
      </div>
      <div className="client-info mt-4">
        <div className="client-img overflow-hidden">
          <img
            src={props.clientItem.img}
            className="img-fluid w-100 d-block"
            alt={props.clientItem.name}
          />
        </div>
        <h4 className="m-0 mt-3">{props.clientItem.name}</h4>
        <small>{props.clientItem.categoary}</small>
      </div>
      <p></p>
    </div>
  );
};

export default TestiBox;
