import styled, { createGlobalStyle } from "styled-components";
import { Routes, Route } from "react-router-dom";
import Character from "./pages/Character/Character";
import Authorization from "./components/Forms/Authorization/Authorization";
import Registration from "./components/Forms/Registration/Registration";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Inter, sans-serif; 
    color: #fff;
  }

  body {
    overflow-x: hidden;
    font-size: 16px;
    font-weight: 400;
    line-height: 1;
    background-color: #1B2427;
  }

  button,
  input {
    border: none;
    outline: none;
  }

  button {
    cursor: pointer;
  }
`;

const AppWrapper = styled.div`
  position: relative;
  max-width: 1160px;
  padding: 0 10px;
  margin: 0 auto;
  height: 100vh;
`;

export const Form = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #171f22;
  border-radius: 20px;
  width: 340px;
  min-height: 300px;
  padding: 20px 35px 45px;
  box-shadow: 0px 0px 14px 6px rgba(7, 8, 9, 0.25);
`;

export const FormTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-top: 30px;
`;

function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<Authorization />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/character" element={<Character />} />
      </Routes>
      <GlobalStyle />
    </AppWrapper>
  );
}

export default App;
