import { useContext } from "react";
import { StoreContext } from "../../context/comtextStore";
import { useNavigate } from "react-router-dom";
import "./quis-styled.css";

function Quis3() {
  const { contador, incrementarContador } = useContext(StoreContext);
  const navigate = useNavigate();


  const handleOptionClick = () => {
    navigate("/quis4");
  };
  const handleOptionClickCorrect = () => {
    navigate("/quis4");
    incrementarContador()
  };

  return (
    <div className="container">
      <div className="content">
        <span className="question">3| Qual a minha bebida casual preferida?</span>
        <button className="opitions" onClick={handleOptionClickCorrect}>
          terere
        </button>
        <button className="opitions" onClick={handleOptionClick}>
          agua
        </button>
        <button className="opitions" onClick={handleOptionClick}>
          suco
        </button>
      </div>
    </div>
  );
}

export default Quis3;
