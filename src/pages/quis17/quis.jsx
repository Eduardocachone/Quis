import { useContext } from "react";
import { StoreContext } from "../../context/comtextStore";
import { useNavigate } from "react-router-dom";
import "./quis-styled.css";

function Quis17() {
  const { contador, incrementarContador } = useContext(StoreContext);
  const navigate = useNavigate();


  const handleOptionClick = () => {
    navigate("/quis18");
  };
  const handleOptionClickCorrect = () => {
    navigate("/quis18");
    incrementarContador()
  };

  return (
    <div className="container">
      <div className="content">
        <span className="question">17| Qual linguagem de programação eu ultilizo? </span>
        <button className="opitions" onClick={handleOptionClick}>
          pyton
        </button>
        <button className="opitions" onClick={handleOptionClick}>
          java
        </button>
        <button className="opitions" onClick={handleOptionClickCorrect}>
          javascript
        </button>
      </div>
    </div>
  );
}

export default Quis17;
