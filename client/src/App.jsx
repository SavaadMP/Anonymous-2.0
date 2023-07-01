import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./pages/Hero/Hero";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index path="/" element={<Hero />} />
      </Routes>
    </>
  );
}

export default App;
