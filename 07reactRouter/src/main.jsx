import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/home/home.jsx'
import About from './components/about/about.jsx'
import Layout from './Layout.jsx'
import Contact from './components/contact/contact.jsx'
import User from './user/User.jsx'
import Github, { githubInfoloader } from './components/Github/Github.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact us",
        element: <Contact />
      },
      {
        path: "user/:userid",
        element: <User />
      },
      {
        loader: (githubInfoloader),
        path: "github",
        element: <Github />
      }
    ]
  }
])

// const router=createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/ ' element={<Layout/>}>
//         <Route path='' element={<Home />}/>
//       <Route path='/about' element={<About />}/>
//       <Route path='/contact us' element={<Contact />}/>
//     </Route>
//   )
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
