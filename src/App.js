
import MidContainer from "./components/dashboard/landingpage/landingpage";
import Application from "./components/dashboard/application/application";

import Requiring from "./components/dashboard/application/requiring";
import Prospect from "./components/dashboard/application/prospect";
import Quoting from "./components/dashboard/quoting/quoting";
import EligibilityCheck from "./components/dashboard/eligibility/eligibility";
import ScopeOfAppointment from "./components/dashboard/scope/scope";
import { Route, Routes } from "react-router-dom"
function App() {
  return (
   <>
   

   <Routes>
    <Route path="/react" element={<MidContainer/>} />
    <Route path="/MidContainer" element={<MidContainer/>}/>
    <Route path="/Quoting" element={<Quoting/>}/>
        <Route path="/Application" element={<Application />}/> 
        <Route path="/EligibilityCheck" element={<EligibilityCheck />}/>
        <Route path="/ScopeOfAppointment" element={<ScopeOfAppointment />}/> 

        <Route path="/Requiring" element={<Requiring/>}/> 
        <Route path="/Prospect" element={<Prospect/>}/> 
          </Routes>

   </>
  )
}
export default App;