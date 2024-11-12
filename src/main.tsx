import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from './redux'
import './index.css'
import App from './App.tsx'
import Loader from './component/loader'
import ErrorBoundary from './component/erreur/ErrorBoundary.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <ErrorBoundary>
            <Suspense fallback={<Loader />}>
              <App />
            </Suspense>
          </ErrorBoundary>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>,
)
