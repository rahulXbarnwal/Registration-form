import "./App.css";

import { Route, Routes } from "react-router-dom";

import MainForm from "./components/MainForm";

function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<MainForm />} />
        <Route path="/register" element={<MainForm />} />
      </Routes>
    </div>
  );
}

export default App;
