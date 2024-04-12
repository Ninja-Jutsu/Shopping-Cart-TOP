/* eslint-disable no-unused-vars */
import React from 'react'
import './App.css'
import ItemsProvider from './components/ItemsProvider/ItemsProvider'

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

//pages
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'

import RootLayout from './layouts/RootLayout'

// layouts

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<RootLayout />}
    >
      <Route
        index
        element={<HomePage />}
      />
      <Route
        path='CartPage'
        element={<CartPage />}
      />
    </Route>
  )
)

function App() {
  return (
    <ItemsProvider>
      <RouterProvider router={router} />
    </ItemsProvider>
  )
}

export default App
