import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {AppKitProvider}  from "./blockchain/ConnetButton";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppKitProvider>
    <App />
  </AppKitProvider>
);