import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
	@keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
  .fade-in-enter {
    animation: fadeIn 0.5s;
  }
  .fade-in-exit {
    display: none;
  }

  body {
    font-family: sans-serif;
  }
  
  .container {
    width: 1200px;
  }

  
  `;

export default GlobalStyles;
