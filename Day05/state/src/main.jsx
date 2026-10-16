import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import State from "./pages/State.jsx";
import { BrowserRouter, Route, Routes } from "react-router";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/state" element={<State />} />
    </Routes>
  </BrowserRouter>,
);
