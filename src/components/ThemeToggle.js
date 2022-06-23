import React from 'react';
import StyledButton1 from './StyledButton1';

const ThemeToggle = (props) => {
   const { themeToggle } = props;
   return (
      <StyledButton1 onClick={themeToggle}>Switch Theme ☀️ 🌙</StyledButton1>
   );
};

export default ThemeToggle;