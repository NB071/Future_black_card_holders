import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/main.scss";
import IndexPage from "./pages/IndexPage/IndexPage";
import ChatBotPage from "./pages/ChatBotPage/ChatBotPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/chat-bot" element={<ChatBotPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
