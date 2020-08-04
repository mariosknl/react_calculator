import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledBtn = styled.button`
  width: ${props => (props.wide ? '50%' : '25%')};
  border: solid 2px #000;
  background: ${props => props.color};
  p {
    font-size: 2.2rem;
  }
  &:hover {
    background: linear-gradient(90deg, rgba(117,57,37,1) 0%, rgba(212,95,29,1) 50%, rgba(117,57,37,1) 100%);
    cursor:pointer;
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
