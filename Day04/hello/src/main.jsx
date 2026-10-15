import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Story from "./pages/Story.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import Store from "./pages/Store.jsx";
import Menu from "./pages/Menu.jsx";
import Layout from "./pages/Layout.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<App />} />
        <Route path="/story" element={<Story />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/store" element={<Store />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
