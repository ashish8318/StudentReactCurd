
import Nav from "./component/Nav"
import Studentdata from "./component/Studentdata";
import Registeration from "./component/Registeration";
import Update from "./component/Update";
import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
function App() {
  return ( 
   <Router>
     <Nav/>
    <Routes>
      <Route exact path="/" element={<Studentdata/>}/>
      <Route exact path="/register" element={<Registeration/>}/>
      <Route exact path="/update/:id" element={<Update/>}/>
    </Routes>

   </Router>

    /* <Login /> */

  );
}

export default App;