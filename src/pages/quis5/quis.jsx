import { useContext } from "react";
import { StoreContext } from "../../context/comtextStore";
import { useNavigate } from "react-router-dom";
import "./quis-styled.css";

function Quis5() {
  const { contador, incrementarContador } = useContext(StoreContext);
  const navigate = useNavigate();


  const handleOptionClick = () => {
    navigate("/quis6");
  };
  const handleOptionClickCorrect = () => {
    navigate("/quis6");
    incrementarContador()
  };

  return (
    <div className="container">
      <div className="content">
        <span className="question">5| Qual a minha bebida alcólica favorita?</span>
        <button className="opitions" onClick={handleOptionClickCorrect}>
          caipirnha
        </button>
        <button className="opitions" onClick={handleOptionClick}>
          wisk
        </button>
        <button className="opitions" onClick={handleOptionClick}>
          cerveija
        </button>
      </div>
    </div>
  );
}

export default Quis5;
