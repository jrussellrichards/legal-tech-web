import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import App from './App'
import './index.css'

const theme = extendTheme({
  colors: {
    brand: {
      950: '#020617', // Primary Navy
      900: '#0f172a', // Secondary Navy
      500: '#3b82f6', // Accent Blue
      600: '#2563eb', // Darker Blue
    }
  },
  fonts: {
    heading: `'Outfit', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.800',
      }
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
