import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import { Box, styled } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./component/Detail/Detail";

// css
const Wrapper = styled(Box)`
  margin-top: 55px;
`;

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Detail />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
