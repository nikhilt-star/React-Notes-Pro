import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import NotesDataContext from './DataContexts/NotesDataContext.jsx'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; // theme
import 'primereact/resources/primereact.min.css';               // core css
import 'primeicons/primeicons.css';                             // icons


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <NotesDataContext>
      <PrimeReactProvider value={{ unstyled: false }}>
        <App/>
      </PrimeReactProvider>
    </NotesDataContext>
  </BrowserRouter>
)
