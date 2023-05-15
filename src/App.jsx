import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginCard from "./components/general/LoginCard/LoginCard"
import SideBar from "./components/general/SideBar/SideBar";


function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/*" element={<LoginCard />}/>
      <Route path="/Home" element={<SideBar role={'cliente'}/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
