import Morebtn from "../Morebtn";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import PlusBtn from "../PlusBtn";

const NewsBox = (props) => {
  const [smShow, setSmShow] = useState(false);
  return (
    <div
      className="col-lg-4 col-md-6"
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      <div className="news-box text-md-start text-center rounded overflow-hidden">
        <div className="news-img overflow-hidden">
          <img
            src={props.newsItem.img}
            className="img-fluid w-100 d-block"
            alt="news"
          />
        </div>
        <div className="news-details p-4 pb-5">
          <p className="m-0">
            {props.newsItem.categoary} / <small>{props.newsItem.date}</small>
          </p>
          <h5 className="fw-bold mb-4">{props.newsItem.title}</h5>
          <div className="d-flex align-items-center justify-content-center justify-content-md-start">
            <Morebtn content="Read More" />
            <Button
              type="button"
              className="bg-transparent border-0"
              onClick={() => setSmShow(true)}
            >
              <PlusBtn />
            </Button>
            <Modal
              size="sm"
              show={smShow}
              onHide={() => setSmShow(false)}
              aria-labelledby="example-modal-sizes-title-sm"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm">
                  {props.newsItem.title}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="text-center">
                <img
                  src={props.newsItem.img}
                  className="img-fluid d-block w-100"
                  alt="news"
                />
                <p>{props.newsItem.more}</p>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsBox;
