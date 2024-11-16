import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/joy';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <CssBaseline/>
    <App />
  </BrowserRouter>,
);
