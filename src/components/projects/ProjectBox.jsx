import Morebtn from "../Morebtn";
import PlusBtn from "../PlusBtn";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const ProjectBox = (props) => {
  const [lgShow, setLgShow] = useState(false);

  return (
    <div
      className="col-lg-4 col-md-6"
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      <div className="project-box position-relative rounded-4 overflow-hidden">
        <div className="project-img h-100">
          <img
            className="img-fluid w-100 h-100 d-block"
            src={props.projectItem.img}
            alt={props.projectItem.title}
          />
        </div>
        <div className="project-details position-absolute d-flex flex-column justify-content-center align-items-center h-100 w-100">
          <h3 className="text-white fw-bold mb-3">{props.projectItem.title}</h3>
          <div className="d-flex align-items-center justify-content-center justify-content-md-start">
            <Morebtn content="Details" />
            <Button
              type="button"
              className="bg-transparent border-0"
              onClick={() => setLgShow(true)}
            >
              <PlusBtn />
            </Button>
            <Modal
              size="lg"
              show={lgShow}
              onHide={() => setLgShow(false)}
              aria-labelledby="example-modal-sizes-title-lg"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                  {props.projectItem.title}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="text-center">
                <p className="fw-bold">
                  Date:{" "}
                  <small className="text-black-50">
                    {props.projectItem.date}
                  </small>
                </p>
                <img
                  src={props.projectItem.img}
                  className="img-fluid d-block my-3 w-100"
                  alt="news"
                />
                <p>{props.projectItem.details}</p>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
