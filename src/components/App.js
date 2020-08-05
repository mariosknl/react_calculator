import React, { Component } from 'react';
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

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      obj: {
        total: null,
        next: null,
        operation: null,
      },
    };
  }

  handleClick(btnName) {
    const { calculate } = calculateDataObj;
    const obj = this.state;
    const newObj = calculate(obj, btnName);
    this.setState({
      obj: { ...newObj },
    });
  }

  render() {
    const { obj } = this.state;
    return (
      <StyledCalc className="App">
        <Display result={obj.total || obj.next || '0'} />
        <ButtonPanel clickHandler={this.handleClick} />
      </StyledCalc>
    );
  }
}

export default App;
