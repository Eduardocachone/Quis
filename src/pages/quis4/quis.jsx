import { useContext } from "react";
import { StoreContext } from "../../context/comtextStore";
import { useNavigate } from "react-router-dom";
import "./quis-styled.css";

function Quis4() {
  const { contador, incrementarContador } = useContext(StoreContext);
  const navigate = useNavigate();


  const handleOptionClick = () => {
    navigate("/quis5");
  };
  const handleOptionClickCorrect = () => {
    navigate("/quis5");
    incrementarContador()
  };

  return (
    <div className="container">
      <div className="content">
        <span className="question">4| Qual é o meu refri favorito preferido?</span>
        <button className="opitions" onClick={handleOptionClick}>
          guarana
        </button>
        <button className="opitions" onClick={handleOptionClickCorrect}>
          coca-cola
        </button>
        <button className="opitions" onClick={handleOptionClick}>
          fanta laranja
        </button>
      </div>
    </div>
  );
}

export default Quis4;
