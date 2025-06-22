import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Social from "./pages/Social";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white pb-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/social" element={<Social />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>

      <nav className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 flex justify-around py-3">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-yellow-400" : "text-white"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            isActive ? "text-yellow-400" : "text-white"
          }
        >
          Shop
        </NavLink>
        <NavLink
          to="/social"
          className={({ isActive }) =>
            isActive ? "text-yellow-400" : "text-white"
          }
        >
          Social
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "text-yellow-400" : "text-white"
          }
        >
          Profile
        </NavLink>
      </nav>
    </BrowserRouter>
  );
}
