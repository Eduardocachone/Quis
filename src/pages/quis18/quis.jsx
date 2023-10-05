import { useContext } from "react";
import { StoreContext } from "../../context/comtextStore";
import { useNavigate } from "react-router-dom";
import "./quis-styled.css";

function Quis18() {
  const { contador, incrementarContador } = useContext(StoreContext);
  const navigate = useNavigate();


  const handleOptionClick = () => {
    navigate("/quis19");
  };
  const handleOptionClickCorrect = () => {
    navigate("/quis19");
    incrementarContador()
  };

  return (
    <div className="container">
      <div className="content">
        <span className="question">18| Oque eu sei programar? </span>
        <button className="opitions" onClick={handleOptionClick}>
          back end
        </button>
        <button className="opitions" onClick={handleOptionClick}>
          front end
        </button>
        <button className="opitions" onClick={handleOptionClickCorrect}>
          os dois
        </button>
      </div>
    </div>
  );
}

export default Quis18;
