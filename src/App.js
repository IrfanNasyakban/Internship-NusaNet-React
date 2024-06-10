import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import Login from "./components/Login";
import DashboardAdmin from "./Pages/DashboardAdmin";
import WaitingData from "./Pages/WaitingData";
import Navbar from "./components/Navbar";
import AcceptList from "./Pages/AcceptList";
import RejectList from "./Pages/RejectList";
import RegisterUser from "./Pages/RegisterUser";
import InputNilai from "./Pages/InputNilai";
import NilaiList from "./Pages/NilaiList";
import NilaiListUser from "./Pages/NilaiListUser";
import NavbarUser from "./components/NavbarUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={(
          <>
          <Dashboard/>
          </>
        )} />
        <Route path="/register" element={(
          <>
          <Register/>
          </>
        )} />
        <Route path="/register-user" element={(
          <>
          <RegisterUser/>
          </>
        )} />
        <Route path="/login" element={(
          <>
          <Login/>
          </>
        )} />
        <Route path="/dashboard" element={(
          <>
          <Navbar/>
          <DashboardAdmin/>
          </>
        )} />
        <Route path="/waiting-data" element={(
          <>
          <Navbar/>
          <WaitingData/>
          </>
        )} />
        <Route path="/nilai/:id" element={(
          <>
          <Navbar/>
          <InputNilai/>
          </>
        )} />
        <Route path="/nilai" element={(
          <>
          <Navbar/>
          <NilaiList/>
          </>
        )} />
        <Route path="/nilai-user" element={(
          <>
          <NavbarUser/>
          <NilaiListUser/>
          </>
        )} />
        <Route path="/accept-list" element={(
          <>
          <Navbar/>
          <AcceptList/>
          </>
        )} />
        <Route path="/reject-list" element={(
          <>
          <Navbar/>
          <RejectList/>
          </>
        )} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
