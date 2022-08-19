import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from "styled-components";
import {Circle} from "../dist/index";

const Wrapper = styled.div`
  position: relative;
  background: blue;
  width: 20vw;
  height: 30vh;
`


const App = () => {
  return <>
      <Wrapper>
          <h1>Hello</h1>
          <Circle time={3000} animation={'fade'} />
      </Wrapper>
  </>
};

ReactDOM.render(<App />, document.getElementById('root'));
