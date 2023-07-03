import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./pages/Hero/Hero";
import CodeValidator from "./pages/CodeValidator/CodeValidator";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index path="/" element={<Hero />} />
        <Route path="/usercode" element={<CodeValidator />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
