
import { useNavigate } from "react-router-dom";
import "./home-styled.css"

function Home() {
    
    const navigate = useNavigate()
 
  return (
    <div className="container">
        <div className="content">
            <span className="text">
                Olá meu amor, bem vinda ao meu quis vamos vere se vc realmente me conhece!
            </span>
            <span className="text">
                Espero pelomenos 12 acertos emtão vamos lá?
            </span>
            <button onClick={() =>{navigate("/quis1")}} className="next" >VAMOS</button>
        </div>
    </div>
  );
}

export default Home;
