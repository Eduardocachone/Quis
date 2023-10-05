import { useContext } from "react";
import { StoreContext } from "../../context/comtextStore";
import { useNavigate } from "react-router-dom";
import "./quis-styled.css";

function Quis11() {
  const { contador, incrementarContador } = useContext(StoreContext);
  const navigate = useNavigate();


  const handleOptionClick = () => {
    navigate("/quis12");
  };
  const handleOptionClickCorrect = () => {
    navigate("/quis12");
    incrementarContador()
  };

  return (
    <div className="container">
      <div className="content">
        <span className="question">11| Qual carro eu sempre quis ter?</span>
        <button className="opitions" onClick={handleOptionClick}>
          chevete
        </button>
        <button className="opitions" onClick={handleOptionClickCorrect}>
          dog ram
        </button>
        <button className="opitions" onClick={handleOptionClick}>
          l 200
        </button>
      </div>
    </div>
  );
}

export default Quis11;
