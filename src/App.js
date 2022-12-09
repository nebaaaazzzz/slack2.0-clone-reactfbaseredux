import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Chat from "./components/Chat";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "./pages/login.page";
import { auth } from "./firebase";
function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <p
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        loading...
      </p>
    );
  }
  return (
    <BrowserRouter>
      {user ? (
        <AppBody>
          <Header />

          <Sidebar />
          <Routes>
            <Route path="/">
              <Route index element={<Chat />} />
            </Route>
          </Routes>
        </AppBody>
      ) : (
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}
const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
export default App;
