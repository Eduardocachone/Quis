import { useContext } from "react";
import { StoreContext } from "../../context/comtextStore";
import { useNavigate } from "react-router-dom";
import "./quis-styled.css";

function Quis8() {
  const { contador, incrementarContador } = useContext(StoreContext);
  const navigate = useNavigate();


  const handleOptionClick = () => {
    navigate("/quis9");
  };
  const handleOptionClickCorrect = () => {
    navigate("/quis9");
    incrementarContador()
  };

  return (
    <div className="container">
      <div className="content">
        <span className="question">8| Para oque eu estou estudando?</span>
        <button className="opitions" onClick={handleOptionClick}>
          analize de dados
        </button>
        <button className="opitions" onClick={handleOptionClickCorrect}>
          desenvolvedor
        </button>
        <button className="opitions" onClick={handleOptionClick}>
          engenheiro
        </button>
      </div>
    </div>
  );
}

export default Quis8;
