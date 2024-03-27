import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import Login from "./components/Login";
import DashboardAdmin from "./Pages/DashboardAdmin";
import WaitingData from "./Pages/WaitingData";
import Navbar from "./components/Navbar";

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
          <WaitingData/>
          </>
        )} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
