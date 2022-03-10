import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginReg from "./Components/pages/auth/LoginReg";
import ResetPassword from "./Components/pages/auth/ResetPassword";
import SendPasswordResetEmail from "./Components/pages/auth/SendPassswordResetEmail";
import Contact from "./Components/pages/Contact";
import Home from "./Components/pages/Home";


import Layout from "./Components/pages/Layout";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<LoginReg />} />
            <Route path="/sendpasswordresetemail" element={<SendPasswordResetEmail />} />
            <Route path="/resetpassword" element={<ResetPassword />} />
            
         
          </Route>    
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;