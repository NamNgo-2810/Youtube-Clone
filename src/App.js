import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Watch from "./components/Watch/Watch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch/v=:videoId" element={<Watch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
