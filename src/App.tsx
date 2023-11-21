import { EuiProvider } from '@elastic/eui';
import "@elastic/eui/dist/eui_theme_light.css";
import React from 'react';

function App() {
  return (
    <EuiProvider>
      <div>App</div>
    </EuiProvider>
    
  )
}

export default App

