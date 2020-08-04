import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledBtn = styled.button`
  width: ${props => (props.wide ? '50%' : '25%')};
  border: solid 1px #000;
  background: ${props => props.color};
  p {
    font-size: 2rem;
  }
`;

export default function Button(props) {
  const {
    name, color, wide, handleClick,
  } = props;
  return (
    <StyledBtn
      color={color}
      wide={wide}
      type="button"
      onClick={() => handleClick(name)}
    >
      <p>
        {name}
      </p>
    </StyledBtn>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: '#f4a261',
  wide: false,
};
