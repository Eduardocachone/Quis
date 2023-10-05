import { useContext } from "react";
import { StoreContext } from "../../context/comtextStore";
import { useNavigate } from "react-router-dom";
import "./quis-styled.css";

function Quis15() {
  const { contador, incrementarContador } = useContext(StoreContext);
  const navigate = useNavigate();


  const handleOptionClick = () => {
    navigate("/quis16");
  };
  const handleOptionClickCorrect = () => {
    navigate("/quis16");
    incrementarContador()
  };

  return (
    <div className="container">
      <div className="content">
        <span className="question">15| Qual o meu jogo preferido?</span>
        <button className="opitions" onClick={handleOptionClick}>
          albion online
        </button>
        <button className="opitions" onClick={handleOptionClickCorrect}>
          minecraft
        </button>
        <button className="opitions" onClick={handleOptionClick}>
          farming simulator19
        </button>
      </div>
    </div>
  );
}

export default Quis15;
