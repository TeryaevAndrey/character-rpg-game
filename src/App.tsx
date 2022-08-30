import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Routes, Route } from "react-router-dom";
import Character from "./pages/Profile/Profile";
import Authorization from "./components/Forms/Authorization/Authorization";
import Registration from "./components/Forms/Registration/Registration";
import { getDataCharacters, getDataUsers } from "./store/Store";
import { useAppDispatch } from "./store/Hooks";

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
  min-height: 100vh;
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

export const FormError = styled.span`
  display: inline-block;
  font-size: 10px;
  color: #302020;
`;

export const FormInputStyle = styled.input`
  width: 100%;
  min-height: 40px;
  padding: 10px 25px;
  background-color: #212a2e;
  box-shadow: 0px 0px 10px rgba(93, 109, 115, 0.25);
  border-radius: 10px;
  font-size: 13px;
`;

export const ErrorText = styled.span`
  display: inline-block;
  font-size: 15px;
  color: red;
`;

export const validEmail = (email: string) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(email);
};

function App() {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getDataUsers());
    dispatch(getDataCharacters());
  }, [dispatch])

  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<Authorization />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/profile" element={<Character />} />
      </Routes>
      <GlobalStyle />
    </AppWrapper>
  );
}

export default App;
