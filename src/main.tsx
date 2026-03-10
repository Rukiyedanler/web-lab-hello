import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import UIKit from './UIKit.tsx'

const Main = () => {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <>
      <div className="bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 fixed bottom-0 w-full p-2 text-center text-sm z-50 flex justify-center gap-4 shadow-lg shrink-0">
        <a href="#/" className="hover:underline font-semibold">Portfolyo Sayfasi (App)</a>
        <a href="#/uikit" className="hover:underline font-semibold">UI Kit Sayfasi (UIKit)</a>
      </div>
      <div className="pb-10">
        {hash === '#/uikit' ? <UIKit /> : <App />}
      </div>
    </>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Main />
  </StrictMode>,
)
