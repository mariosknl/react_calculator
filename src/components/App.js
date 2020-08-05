import React from 'react';
import './App.scss';
import styled from 'styled-components';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

const StyledCalc = styled.div`
  width: 700px;
  margin: 0 auto;
  display: "flex";
  flex-direction: "column";
  flex-wrap: "wrap";
`;

export default function App() {
  return (
    <StyledCalc className="App">
      <Display />
      <ButtonPanel />
    </StyledCalc>
  );
}
