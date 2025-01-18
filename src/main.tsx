import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { NextUIProvider } from '@nextui-org/react'
import { TaskProvider } from './components/taskContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NextUIProvider>
      <TaskProvider>
        <App />
      </TaskProvider>
    </NextUIProvider>
  </StrictMode>,
)
