import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import GlobalStyles from './styles/Globalstyles.Style.ts';

createRoot(document.getElementById('root')!).render(
  <>
    <GlobalStyles />
    <App />
  </>,
);
