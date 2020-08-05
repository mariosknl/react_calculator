import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDisplayResult = styled.div`
    background: gray;
    height: 100px;
    display: flex;
    justify-content: flex-end;
    border: solid 2px #000;
    span {
      font-weight: bold;
      padding: 2rem;
      text-align: right;
      font-size: 2rem;
      color: white;
    }
  `;

export default function Display(props) {
  const { result } = props;
  return (
    <div>
      <StyledDisplayResult>
        <span>
          {result}
        </span>
      </StyledDisplayResult>
    </div>
  );
}

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};
