import React from 'react';
import ReactDOM from 'react-dom/client';
import { Pricing } from './pages/Pricing/Pricing';
import { AllProviders } from "data";

// Import all global styles first
import "../src/reset.css";
import "../src/theme.css";
import "../src/responsive.css";
import "../src/icons.css";
import "../src/index.css";

// Import all component styles
import "./styles.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AllProviders>
      <Pricing />
    </AllProviders>
  </React.StrictMode>
);