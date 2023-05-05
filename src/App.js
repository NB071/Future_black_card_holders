import "./styles/main.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage/IndexPage"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/chat-bot" element={<h1>Chat bot</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
