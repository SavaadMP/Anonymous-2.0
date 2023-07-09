import { Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoading } from "./redux/loader";

import Header from "./components/Header/Header";
import Hero from "./pages/Hero/Hero";
import CodeValidator from "./pages/CodeValidator/CodeValidator";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import SendMessage from "./pages/SendMessage/SendMessage";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Profile from "./pages/Profile/Profile";
import Loader from "./components/Loader/Loader";
import MsgSuccess from "./components/MsgSuccess/MsgSuccess";

function App() {
  const { user } = useSelector((state) => state.user);
  const { isLoading } = useSelector((state) => state.loader);

  const dispatch = useDispatch();

  window.addEventListener("offline", (event) => {
    dispatch(setIsLoading(true));
  });

  window.addEventListener("online", (event) => {
    dispatch(setIsLoading(false));
  });

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
            path="/msg_success"
            element={user ? <Navigate to="/profile" /> : <MsgSuccess />}
          />
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
