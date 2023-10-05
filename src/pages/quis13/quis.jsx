import { useContext } from "react";
import { StoreContext } from "../../context/comtextStore";
import { useNavigate } from "react-router-dom";
import "./quis-styled.css";

function Quis13() {
  const { contador, incrementarContador } = useContext(StoreContext);
  const navigate = useNavigate();


  const handleOptionClick = () => {
    navigate("/quis14");
  };
  const handleOptionClickCorrect = () => {
    navigate("/quis14");
    incrementarContador()
  };

  return (
    <div className="container">
      <div className="content">
        <span className="question">13| Quantas vezes eu ja quase fui de arasta pra cima?</span>
        <button className="opitions" onClick={handleOptionClickCorrect}>
          nem sei mais
        </button>
        <button className="opitions" onClick={handleOptionClick}>
          12
        </button>
        <button className="opitions" onClick={handleOptionClick}>
          25
        </button>
      </div>
    </div>
  );
}

export default Quis13;
