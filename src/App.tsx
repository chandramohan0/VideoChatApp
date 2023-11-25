import { EuiProvider, EuiThemeProvider } from '@elastic/eui';
import "@elastic/eui/dist/eui_theme_light.css";
import React from 'react';
import {Routes, Route} from "react-router-dom";
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {

  const overrides = {
    colors: {
      LIGHT : {primary: "#0b5cff"},
      DARK : {primary: "#0b5cff"}
    },
  }
  return (
    <EuiProvider>
      <EuiThemeProvider modify={overrides}>
        <Routes>
          <Route>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="*" element={<Dashboard />} />
          </Route>
        </Routes>
      </EuiThemeProvider>
    </EuiProvider>
    
  )
}

export default App;

