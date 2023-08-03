import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Form from "./pages/Form/Form.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
