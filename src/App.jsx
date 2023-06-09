import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import NewPage from "./pages/NewPage";
import { components } from "./data/components";
import SignUp from "./components/general/SignUp/SignUpCard";
import ChangePassword from "./components/general/Login/ChangePassword"

const App = () => {
  
  const EnhancedRoutes = components.map(({ component, path }) => {
    const EnhancedComponet = NewPage(component);
    return <Route key={path} path={path} element={EnhancedComponet} />;
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path='/ChangePassword' element={<ChangePassword />} />
        {EnhancedRoutes}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
