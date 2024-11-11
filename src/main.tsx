import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Loader from './component/loader'
import ErrorBoundary from './component/erreur/ErrorBoundary.tsx'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <App />
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>,
)
