import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import RootLayout from '@/layout'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import '@/index.css'

const url = import.meta.env.VITE_APP_BACKEND_URL

const client = new ApolloClient({
  uri: url,
  cache: new InMemoryCache(),
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <RootLayout />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
)
