// import React from 'react'

import { ThemeProvider } from "./ThemeContext";

function Box() {
  const { primary, secondary } = ThemeProvider();
  return (
    <div style={{ backgroundColor: primary.text, color: primary.main }}>
      {primary.text} {secondary.main}
    </div>
  );
}

export default Box;
