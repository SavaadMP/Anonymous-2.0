import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./pages/Hero/Hero";
import CodeValidator from "./pages/CodeValidator/CodeValidator";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index path="/" element={<Hero />} />
        <Route index path="/usercode" element={<CodeValidator />} />
      </Routes>
    </>
  );
}

export default App;
