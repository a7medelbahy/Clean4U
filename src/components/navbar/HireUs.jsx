import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const HireUs = () => {
  const [lgShow, setLgShow] = useState(false);
  return (
    <div className="hire-us ms-3">
      <Button
        type="button"
        onClick={() => setLgShow(true)}
        className="main-btn rounded-5 fw-bold"
      >
        Order Now
      </Button>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Regist to get our services
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-4">
              <label htmlFor="validationDefault01" className="form-label">
                Full name
              </label>
              <input
                type="text"
                className="form-control"
                id="validationDefault01"
                placeholder="Your Full Name"
                required
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="validationDefault02" className="form-label">
                Personal Id
              </label>
              <input
                type="text"
                className="form-control"
                id="validationDefault02"
                placeholder="Your Personal Id"
                required
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="validationDefaultUsername" className="form-label">
                Username
              </label>
              <div className="input-group">
                <span className="input-group-text" id="inputGroupPrepend2">
                  @
                </span>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefaultUsername"
                  aria-describedby="inputGroupPrepend2"
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <label htmlFor="validationDefault03" className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control"
                id="validationDefault03"
                required
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="validationDefault04" className="form-label">
                State
              </label>
              <select className="form-select" id="validationDefault04" required>
                <option defaultValue disabled value="">
                  Choose...
                </option>
                <option>num1</option>
                <option>num2</option>
                <option>num3</option>
                <option>num4</option>
              </select>
            </div>
            <div className="col-md-3">
              <label htmlFor="validationDefault05" className="form-label">
                Zip
              </label>
              <input
                type="text"
                className="form-control"
                id="validationDefault05"
                required
              />
            </div>
            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="invalidCheck2"
                  required
                />
                <label className="form-check-label" htmlFor="invalidCheck2">
                  Agree to terms and conditions
                </label>
              </div>
            </div>
            <div className="col-12">
              <button className="btn btn-primary" type="submit">
                Order Now
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default HireUs;
