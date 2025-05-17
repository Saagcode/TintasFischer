import "./styles.css";

function CentralCallBtn() {
  return (
    <>
      <div className="container-centralCallBtn">
        <button
          className="content-centralCallBtn"
          onClick={() => window.open(`https://www.lojatintasfischer.com.br`)}
        >
          <h1>COMPRAR ON-LINE</h1>
        </button>
      </div>
    </>
  );
}

export default CentralCallBtn;
