import { useState } from "react";
import "./styles.css";

function CentralCallBtn() {
  const [appear, setAppear] = useState(false);
  function windowMove() {
    scrollY = window.scrollY;
    if (scrollY > 0) {
      setAppear(true);
    } else {
      setAppear(false);
    }
  }
  return (
    <>
      <div className="container-centralCallBtn">
        <button className="content-centralCallBtn">
          <h1>COMPRE ON-LINE</h1>
        </button>
      </div>
    </>
  );
}

export default CentralCallBtn;
