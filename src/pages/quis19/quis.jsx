import { useContext } from "react";
import { StoreContext } from "../../context/comtextStore";
import { useNavigate } from "react-router-dom";
import "./quis-styled.css";

function Quis19() {
  const { contador, incrementarContador } = useContext(StoreContext);
  const navigate = useNavigate();


  const handleOptionClick = () => {
    navigate("/quis20");
  };
  const handleOptionClickCorrect = () => {
    navigate("/quis20");
    incrementarContador()
  };

  return (
    <div className="container">
      <div className="content">
        <span className="question">19| Qual a minha atividade fisica preferida? </span>
        <button className="opitions" onClick={handleOptionClick}>
          correr
        </button>
        <button className="opitions" onClick={handleOptionClickCorrect}>
          nadar
        </button>
        <button className="opitions" onClick={handleOptionClick}>
          caminhar
        </button>
      </div>
    </div>
  );
}

export default Quis19;
