import React from 'react';
import StyledButton1 from './StyledButton1';

const ThemeToggler = (props) => {
   const { themeToggler } = props;
   return (
      <StyledButton1 onClick={themeToggler}>Switch Theme ☀️ 🌙</StyledButton1>
   );
};

export default ThemeToggler;