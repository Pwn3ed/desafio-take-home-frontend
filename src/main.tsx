import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './routes/Error.tsx'
import Home from './routes/Home.tsx'

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  },
])

createRoot(document.getElementById('root')!)
  .render(<RouterProvider router={router} />)
