import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledBtn = styled.button`
  width: ${props => (props.wide ? '50%' : '25%')};
  border: solid 1px #000;
  background: ${props => props.color}

`;

export default function Button(props) {
  const { name, color, wide } = props;
  return (
    <StyledBtn color={color} wide={wide} type="button">
      {name}
    </StyledBtn>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  color: '#f4a261',
  wide: false,
};
