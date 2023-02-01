import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './reset.css';
import { QueryClient, QueryClientProvider } from 'react-query'

//context
import { AuthProvider } from './contexts/AuthContext';
import { BasketProvider } from './contexts/BasketContext';
import { ChakraProvider } from '@chakra-ui/react'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ReactQueryDevtools } from 'react-query/devtools'


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnMount: false,
    }
  }
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <QueryClientProvider client={queryClient}>
    <ChakraProvider>
      <AuthProvider>
        <BasketProvider>
          <App />
        </BasketProvider>
      </AuthProvider>
    </ChakraProvider>

    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
