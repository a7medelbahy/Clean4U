import Morebtn from "../Morebtn";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import PlusBtn from "../PlusBtn";

const ServiceBox = (props) => {
  const [smShow, setSmShow] = useState(false);
  return (
    <div
      className="col-lg-4 col-md-6"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="service-box p-5 overflow-hidden rounded">
        <h5 className="service-icon display-4">{props.serviceItem.icon}</h5>
        <h3 className="mb-4 fw-bold">{props.serviceItem.title}</h3>
        <p className="service-desc">{props.serviceItem.desc}</p>
        <div className="d-flex align-items-center justify-content-center">
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
                {props.serviceItem.title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
              <p>{props.serviceItem.details}</p>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default ServiceBox;
