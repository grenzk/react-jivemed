import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import CustomFonts from './components/CustomFonts'
import { MantineProvider } from '@mantine/core'
import { NotificationsProvider } from '@mantine/notifications'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        headings: { fontFamily: 'Greycliff CF, sans-serif' },
      }}
    >
      <NotificationsProvider position="top-right" zIndex={2077}>
        <CustomFonts />
        <App />
      </NotificationsProvider>
    </MantineProvider>
  </React.StrictMode>
)
