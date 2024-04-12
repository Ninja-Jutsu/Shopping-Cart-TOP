/* eslint-disable no-unused-vars */
import React from 'react'
import './App.css'

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

//pages 
import Home from './pages/Home'
import About from './pages/About'
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
        element={<Home />}
      />
      <Route
        path='about'
        element={<About />}
      />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
