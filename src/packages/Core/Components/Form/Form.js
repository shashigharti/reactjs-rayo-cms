import React from 'react';
import PropTypes from 'prop-types';
//Example code for styled components
// import styled from 'styled-components';

// export const Form = styled.form`
//     margin-bottom: 1em;
// `;

import './form.css';

export const Form = (props = {}) => {
  const { children, onSubmit, customClasses, ...otherProps } = props;

  return (
    <form className={`form ${customClasses}`} onSubmit={onSubmit} {...otherProps}>
      {children}
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func,
  children: PropTypes.node.isRequired,
  customClasses: PropTypes.string,
};
