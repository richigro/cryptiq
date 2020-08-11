import React from 'react';
import './App.css';
import WelcomeMessage from './WelcomeMessage';
import styled, { css } from 'styled-components';

const MyButton = styled.button `
  color: green;
  

  ${props => props.primary && css `
    background-color: white;
    color: palevioletred;
  `}
`; 


const App = () => {
  return (
    <div>
      <WelcomeMessage/>
      <MyButton primary>
        hello
      </MyButton>
    </div>
  );
}

export default App;
