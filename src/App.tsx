import { EuiProvider } from '@elastic/eui';
import "@elastic/eui/dist/eui_theme_light.css";
import React from 'react';
import {Routes, Route} from "react-router-dom";
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <EuiProvider>
      <Routes>
        <Route>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<Dashboard />} />
        </Route>
      </Routes>
    </EuiProvider>
    
  )
}

export default App;

