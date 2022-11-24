import "./App.css";

import { Route, Routes } from "react-router-dom";

import MainForm from "./components/MainForm";
import Success from "./components/Success";

function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<MainForm />} />
        <Route path="/register" element={<MainForm />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </div>
  );
}

export default App;
