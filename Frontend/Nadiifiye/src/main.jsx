import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { AuthProvider} from "./utility/UserContext";

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthProvider>
  <React.StrictMode>
      <App />
  </React.StrictMode>,
    </AuthProvider>
)

