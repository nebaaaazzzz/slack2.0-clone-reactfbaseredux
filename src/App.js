import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/home.page";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppBody>
        <Sidebar />
        <Routes>
          <Route path="/">
            <Route index element={<h1>dsa</h1>} />
          </Route>
        </Routes>
      </AppBody>
    </BrowserRouter>
  );
}
const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
export default App;
