import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Product from './pages/Product.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store.js';
import './index.css'
import Cart from './pages/Cart.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Product />,
  },
  {
    path: "/Cart",
    element: <Cart />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
