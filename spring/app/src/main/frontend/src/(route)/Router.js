/** import library */
import { BrowserRouter, Route, Routes } from "react-router-dom";
/** import page */
import Signin from "../_pages/signin";
import Singup from "../_pages/signup";

/** Route Area */
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/console" element={signState ? <Console /> : <SignIn />} />*/}
        <Route path="/signup" element={<Singup />} />
        <Route path="/singin" element={<Signin />} />
        <Route path="/*" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}
