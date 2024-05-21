import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import CarDetails from "./pages/CarDetails.tsx";
import Category from "./pages/Category.tsx";
import Navbar from "./components/Navbar.tsx";
import Company from "./pages/Company.tsx";
import AuctionToday from "./pages/AuctionToday.tsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/car/:id" element={<CarDetails />} />
          <Route path="/category" element={<Category />} />
          <Route path="/company" element={<Company />} />
          <Route path="/auction" element={<AuctionToday />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
