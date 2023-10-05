import { useContext } from "react";
import { StoreContext } from "../../context/comtextStore";
import { useNavigate } from "react-router-dom";
import "./quis-styled.css";

function Quis14() {
  const { contador, incrementarContador } = useContext(StoreContext);
  const navigate = useNavigate();


  const handleOptionClick = () => {
    navigate("/quis15");
  };
  const handleOptionClickCorrect = () => {
    navigate("/quis15");
    incrementarContador()
  };

  return (
    <div className="container">
      <div className="content">
        <span className="question">14| Aonde eu prefiro jogar?</span>
        <button className="opitions" onClick={handleOptionClick}>
          video game
        </button>
        <button className="opitions" onClick={handleOptionClick}>
          celular
        </button>
        <button className="opitions" onClick={handleOptionClickCorrect}>
          computador
        </button>
      </div>
    </div>
  );
}

export default Quis14;
