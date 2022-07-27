import React, { createContext } from 'react';
import {render} from "react-dom"
import App from './App';
import ColorProvider from './color-hooks';

export const ColorContext = createContext();

render(
  <ColorProvider>
    <App />
  </ColorProvider>,
  document.getElementById('root')
)
