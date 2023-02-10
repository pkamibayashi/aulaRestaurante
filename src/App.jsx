import { Routes, Route } from "react-router-dom";
import { CreateFood } from "./pages/CreateFood";
import { Home } from "./pages/home";

function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateFood />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
