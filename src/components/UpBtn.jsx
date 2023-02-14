import { useState, useEffect } from "react";

const UpBtn = () => {
  const [upBtn, setUpBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 300) {
        setUpBtn(true);
      } else {
        setUpBtn(false);
      }
    });
  });
  const upToTop = () => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };
  return (
    <div className="container">
      <div className="up-btn">
        {upBtn && (
          <button onClick={upToTop} className="main-btn px-3 py-2 fw-bolder">
            <i className="fa-solid fa-angles-up fs-4"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default UpBtn;
