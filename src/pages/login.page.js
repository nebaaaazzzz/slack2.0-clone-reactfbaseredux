import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import styled from "styled-components";
import { auth } from "../firebase";

function Login() {
  function handleClick() {
    signInWithPopup(auth, new GoogleAuthProvider());
  }
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd-970-80.jpg.webp"
          alt="slak"
        />
        <h1>Sign in to the slack clone</h1>
        <p>clone.slack.com </p>
        <button onClick={handleClick}>sign in with google</button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}
const LoginContainer = styled.div`
  background-color: #f8f8f8;
  display: grid;
  height: 100vh;
  place-items: center;
`;

const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0, 1px 2px rgba(0, 0, 0, 0.24);
  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }
  > button {
    margin-top: 50px;
    outline: none;
    border: none;
    padding: 15px 20px;
    border-radius: 10px;
    font-size: 1rem;
    text-transform: inherit !important;
    background-color: #0a8d48;
    color: #fff;
  }
`;

export default Login;
