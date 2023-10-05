import { useContext } from "react";
import { StoreContext } from "../../context/comtextStore";
import { useNavigate } from "react-router-dom";
import "./quis-styled.css";

function Quis9() {
  const { contador, incrementarContador } = useContext(StoreContext);
  const navigate = useNavigate();


  const handleOptionClick = () => {
    navigate("/quis10");
  };
  const handleOptionClickCorrect = () => {
    navigate("/quis10");
    incrementarContador()
  };

  return (
    <div className="container">
      <div className="content">
        <span className="question">9| Oque eu sei desenvolver?</span>
        <button className="opitions" onClick={handleOptionClickCorrect}>
          sites
        </button>
        <button className="opitions" onClick={handleOptionClick}>
          aplicativos
        </button>
        <button className="opitions" onClick={handleOptionClick}>
          jogos
        </button>
      </div>
    </div>
  );
}

export default Quis9;
