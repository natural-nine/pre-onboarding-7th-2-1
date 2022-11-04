import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Detail from "./pages/Detail";
import Home from "./pages/Home";

function App() {
  return (
    <Wrap>
      <MainBox>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </MainBox>
    </Wrap>
  );
}

const Wrap = styled.div`
  position: fixed;
  overflow: auto;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-color: gray;
  ::after {
    content: "";
    display: block;
    position: absolute;
    z-index: 1;
    top: 344px;
    right: 330px;
    width: 300px;
    height: 114px;
    background-size: cover;
  }
`;

const MainBox = styled.div`
  background-color: #fff;
  position: relative;
  z-index: 2;
  height: auto;
  overflow-y: scroll;
  min-height: 100vh;
  width: 100%;
  @media screen and (min-width: 280px) {
    width: 450px;
    margin: auto;
    min-height: 100vh;
    height: 100%;
    box-shadow: var(--SHADOW2);
  }
  @media screen and (max-width: 450px) {
    width: 100%;
    margin: auto;
    min-height: 100vh;
    height: 100%;
    box-shadow: var(--SHADOW2);
  }
`;

export default App;
