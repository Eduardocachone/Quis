import { useContext } from "react";
import { StoreContext } from "../../context/comtextStore";
import { useNavigate } from "react-router-dom";
import "./quis-styled.css";

function Quis10() {
  const { contador, incrementarContador } = useContext(StoreContext);
  const navigate = useNavigate();


  const handleOptionClick = () => {
    navigate("/quis11");
  };
  const handleOptionClickCorrect = () => {
    navigate("/quis11");
    incrementarContador()
  };

  return (
    <div className="container">
      <div className="content">
        <span className="question">10| Qual pais eu quiria morar?</span>
        <button className="opitions" onClick={handleOptionClick}>
          estados unidos
        </button>
        <button className="opitions" onClick={handleOptionClick}>
          australia
        </button>
        <button className="opitions" onClick={handleOptionClickCorrect}>
          canada
        </button>
      </div>
    </div>
  );
}

export default Quis10;
