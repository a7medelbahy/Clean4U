const Morebtn = ({ content }) => {
  return (
    <div className="btn-more d-flex gap-2 align-items-center">
      <p className="m-0 fw-bold">{content}</p>
      <i className="fa-solid fa-right-long"></i>
    </div>
  );
};

export default Morebtn;
