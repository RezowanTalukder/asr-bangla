import "antd/dist/antd.min.css";

import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import "./index.css";

import { Recognizer } from "./recognizer";

const Wrapper = styled.div`
  text-align: center;
  margin: auto;
  justify-content: center;
`;

ReactDOM.render(
  <React.StrictMode>
    <Wrapper>
      <h1>ASR BANGLA</h1>
      <h2>An Automatic Speech Recognition System for Bangla Language</h2>
      <h3>
        Select a language and load the model to start speech recognition.
      </h3>
      <p>
              <br/>
      </p>
      <Recognizer />
      <p>
        <br /><br /><br />
        <a href="https://www.linkedin.com/in/rez1-talukder" >
          ASR Bangla @ Md Rezowan Talukder
        </a>
      </p>
    </Wrapper>
  </React.StrictMode>,
  document.getElementById("root")
);
