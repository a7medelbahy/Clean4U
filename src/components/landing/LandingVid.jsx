import LandingVideo from "../../images/clean4u.mp4";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const LandingVid = () => {
  const [lgShow, setLgShow] = useState(false);

  return (
    <div className="landing-video">
      <Button
        type="button"
        onClick={() => setLgShow(true)}
        className="main-btn rounded-5 fw-bold fs-5"
      >
        Our Video<i className="ms-2 fa-solid fa-circle-play"></i>
      </Button>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">Clean 4U</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <video controls autoPlay loop className="w-100 rounded">
            <source src={LandingVideo} type="video/mp4" />
          </video>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default LandingVid;
