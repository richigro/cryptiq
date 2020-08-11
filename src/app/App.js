import React from 'react';
import './App.css';
import AppLayout from './AppLayout';
import WelcomeMessage from './WelcomeMessage';
import AppBar from './AppBar';
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
    <AppLayout>
    <AppBar/>
      <WelcomeMessage/>
      <MyButton primary>
        hello
      </MyButton>

    </AppLayout>
  );
}

export default App;
