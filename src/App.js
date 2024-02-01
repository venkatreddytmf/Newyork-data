import { BrowserRouter as Router, Routes, Route ,Link} from "react-router-dom";
import Studentdata from "./Elements/Home-page";
import UpdateStudent from "./Elements/Edit-page";
import Createnew from "./Elements/Add-new";
import MySearch from "./Elements/search";
import Calculator from "./Elements/Calculater";
import Signp from "./Login/signpage.js";
import Loginp from "./Login/loginpage";
import HeaderPage from "./Elements/header.js";

function App() {
  return (
    <Router>
   <>
   
   

<Routes>
<Route exact path="/"  element={<Loginp />}></Route>
<Route exact path="/go"  element={< Signp />}></Route>
 <Route exact path="/nav" element={<HeaderPage />} ></Route>
  <Route exact path="/data" element={ <Studentdata />}></Route>
  <Route exact path="/edit/:id" element={<UpdateStudent />}></Route>
  <Route exact path="/new" element={<Createnew />}></Route>

 <Route exact path="/cal"  element={<Calculator />}></Route>
 
 


</Routes>
    
   </>
   </Router>
  );
}

export default App;
