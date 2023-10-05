import { useContext } from "react";
import { StoreContext } from "../../context/comtextStore";
import { useNavigate } from "react-router-dom";
import "./quis-styled.css";

function Quis16() {
  const { contador, incrementarContador } = useContext(StoreContext);
  const navigate = useNavigate();


  const handleOptionClick = () => {
    navigate("/quis17");
  };
  const handleOptionClickCorrect = () => {
    navigate("/quis17");
    incrementarContador()
  };

  return (
    <div className="container">
      <div className="content">
        <span className="question">16| Quantos filhos eu tenho? (pets)</span>
        <button className="opitions" onClick={handleOptionClickCorrect}>
          7
        </button>
        <button className="opitions" onClick={handleOptionClick}>
          6
        </button>
        <button className="opitions" onClick={handleOptionClick}>
          8
        </button>
      </div>
    </div>
  );
}

export default Quis16;
