import React from 'react';
import './App.scss';
import styled from 'styled-components';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculateDataObj from '../logic/calculate';

const StyledCalc = styled.div`
  width: 700px;
  margin: 50px auto;
  display: "flex";
  flex-direction: "column";
  flex-wrap: "wrap";
`;

function App() {
  // eslint-disable-next-line no-unused-vars
  const { calculate } = calculateDataObj;
  return (
    <StyledCalc className="App">
      <Display />
      <ButtonPanel />
    </StyledCalc>
  );
}

export default App;
