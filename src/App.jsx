import { BrowserRouter, Routes, Route } from "react-router-dom";
import themeConfig from "./ui/ThemeConfig";
import { ConfigProvider } from "antd";
import { EditProf, NavBar, ResetPass } from "./components";
import Error from "./components/Error/Error";
import {
  AllHouses,
  Cart,
  Checkout,
  Deals,
  HomeLayout,
  Landing,
  Login,
  SingleHouse,
  ForgotPassword,
  Dash,
} from "./pages";
import Register from "./pages/Register";

function App() {
  return (
    <ConfigProvider theme={themeConfig}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Landing />} />
            <Route path="allhouses" element={<AllHouses />} />
            <Route path="allhouses/:id" element={<SingleHouse />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="cart" element={<Cart />} />
            <Route path="deals" element={<Deals />} />
            <Route path="/dashboard" element={<Dash />}>
              <Route path="editProfile" element={<EditProf />} />
              <Route path="resetPassword" element={<ResetPass />} />
            </Route>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
