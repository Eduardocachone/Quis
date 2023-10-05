import { BrowserRouter, Route, Routes } from "react-router-dom";


import './App.css';
import Home from './pages/home/home';
import Quis1 from "./pages/quis1/quis";
import Quis2 from "./pages/quis2/quis";
import Quis3 from "./pages/quis3/quis";
import Quis4 from "./pages/quis4/quis";
import Quis5 from "./pages/quis5/quis";
import Quis6 from "./pages/quis6/quis";
import Quis7 from "./pages/quis7/quis";
import Quis8 from "./pages/quis8/quis";
import Quis9 from "./pages/quis9/quis";
import Quis10 from "./pages/quis10/quis";
import Quis11 from "./pages/quis11/quis";
import Quis12 from "./pages/quis12/quis";
import Quis13 from "./pages/quis13/quis";
import Quis14 from "./pages/quis14/quis";
import Quis15 from "./pages/quis15/quis";
import Quis16 from "./pages/quis16/quis";
import Quis17 from "./pages/quis17/quis";
import Quis18 from "./pages/quis18/quis";
import Quis19 from "./pages/quis19/quis";
import Quis20 from "./pages/quis20/quis";
import { UserStore } from "./context/comtextStore";
import End from "./pages/end/end";

function App() {
  return (
    <BrowserRouter>
      <UserStore>
        <Routes>
          <Route path="/" element={<Home/>} /> 
          <Route path="/quis1" element={<Quis1/>} />
          <Route path="/quis2" element={<Quis2/>} />
          <Route path="/quis3" element={<Quis3/>} />
          <Route path="/quis4" element={<Quis4/>} />
          <Route path="/quis5" element={<Quis5/>} />
          <Route path="/quis6" element={<Quis6/>} />
          <Route path="/quis7" element={<Quis7/>} />
          <Route path="/quis8" element={<Quis8/>} />
          <Route path="/quis9" element={<Quis9/>} />
          <Route path="/quis10" element={<Quis10/>} />
          <Route path="/quis11" element={<Quis11/>} />
          <Route path="/quis12" element={<Quis12/>} />
          <Route path="/quis13" element={<Quis13/>} />
          <Route path="/quis14" element={<Quis14/>} />
          <Route path="/quis15" element={<Quis15/>} />
          <Route path="/quis16" element={<Quis16/>} />
          <Route path="/quis17" element={<Quis17/>} />
          <Route path="/quis18" element={<Quis18/>} />
          <Route path="/quis19" element={<Quis19/>} />
          <Route path="/quis20" element={<Quis20/>} />
          <Route path="/end" element={<End/>} />
        </Routes>
      </UserStore>
    </BrowserRouter>
  );
}

export default App;
