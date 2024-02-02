import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Category from './Category/CategoryComponent.jsx'
import Pregunta from './Pregunta/PreguntaComponent.jsx'
import {
  BrowserRouter as Router,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import SignIn from './Security/login'
import { User } from './Security/UsersComponent'
import { PreguntaForViewer } from './Pregunta/PreguntaForViewer'
import PrivateRoutes from './Security/PrivateRoutes'
import PublicRoutes from './Security/PublicRoutes'


const router = createBrowserRouter([
  {
    path: "/preguntas/viewer",
    element: <PreguntaForViewer></PreguntaForViewer>,
  },
  {
    path: "/login",
    element: <SignIn></SignIn>,
  },
  {
    path: "/users",
    element: <User></User>,
  },
  {
    path: "/categories",
    element: <Category />
  },
  {
    path: "/preguntas",
    element: <Pregunta />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
     <Routes>
      <Route element={<PrivateRoutes />}>
        <Route element={<Category />} path='/categories' />
        <Route element={<Pregunta />} path='/preguntas' />
        <Route element={<User />} path='/users' />
      </Route>
      <Route element={<PublicRoutes />}>
        <Route element={<SignIn />} path='/login' />
      </Route>
    </Routes>
    </Router>
  </React.StrictMode>
)