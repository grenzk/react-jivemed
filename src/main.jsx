import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { MantineProvider } from '@mantine/core'
import CustomFonts from './components/CustomFonts'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        headings: { fontFamily: 'Greycliff CF, sans-serif' },
      }}
    >
      <CustomFonts />
      <App />
    </MantineProvider>
  </React.StrictMode>
)
