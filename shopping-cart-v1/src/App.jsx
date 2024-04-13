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
import Contact from './pages/help/Contact'
import Faq from './pages/help/Faq'
import NotFound from './pages/NotFound'
// import Products, { productsLoader } from './pages/products/Products' //! UNUSED
import ProductDetails, {
  productDetailsLoader,
} from './pages/products/ProductDetails'

// layouts
import RootLayout from './layouts/RootLayout'
import HelpLayout from './layouts/HelpLayout'
import ProductsLayout from './layouts/ProductLayout'

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
      <Route
        path='help'
        element={<HelpLayout />}
      >
        <Route
          path='faq'
          element={<Faq />}
        />
        <Route
          path='contact'
          element={<Contact />}
        />
      </Route>

      <Route
        path='products'
        element={<ProductsLayout />}
      >
        {
          //! UNUSED
          /* <Route
          index
          element={<Products />}
          loader={productsLoader}
        /> */
        }

        <Route
          path=':id'
          element={<ProductDetails />}
          loader={productDetailsLoader}
        />
      </Route>

      <Route
        path='*'
        element={<NotFound />}
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
