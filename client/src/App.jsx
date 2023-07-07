import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "./components/Header/Header";
import Hero from "./pages/Hero/Hero";
import CodeValidator from "./pages/CodeValidator/CodeValidator";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import SendMessage from "./pages/SendMessage/SendMessage";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Profile from "./pages/Profile/Profile";
import Loader from "./components/Loader/Loader";

function App() {
  const { user } = useSelector((state) => state.user);
  const { isLoading } = useSelector((state) => state.loader);

  return (
    <>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <Routes>
          <Route
            index
            path="/"
            element={user ? <Navigate to="/profile" /> : <Hero />}
          />
          <Route
            path="/profile"
            element={!user ? <Navigate to="/" /> : <Profile />}
          />
          <Route path="/usercode" element={<CodeValidator />} />
          <Route path="/sendMessage/:id" element={<SendMessage />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/profile" /> : <Login />}
          />
          <Route
            path="/register"
            element={user ? <Navigate to="/profile" /> : <Register />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      )}
    </>
  );
}

export default App;
