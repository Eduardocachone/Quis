import { useContext } from "react";
import { StoreContext } from "../../context/comtextStore";
import { useNavigate } from "react-router-dom";
import "./quis-styled.css";

function Quis1() {
  const { contador, incrementarContador } = useContext(StoreContext);
  const navigate = useNavigate();


  const handleOptionClick = () => {
    navigate("/quis2");
  };
  const handleOptionClickCorrect = () => {
    navigate("/quis2");
    incrementarContador()
  };

  return (
    <div className="container">
      <div className="content">
        <span className="question">1| O que eu prefiro comer?</span>
        <button className="opitions" onClick={handleOptionClick}>
          doces
        </button>
        <button className="opitions" onClick={handleOptionClick}>
          salgados
        </button>
        <button className="opitions" onClick={handleOptionClickCorrect}>
          os dois 
        </button>
      </div>
    </div>
  );
}

export default Quis1;
