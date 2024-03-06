import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import LoginForm from '../layout/LoginForm'
import RegisterForm from '../layout/RegisterForm'
import useAuth from '../hooks/useAuth'
import Header from '../layout/Header'
import UserHome from '../layout/UserHome'
import NewTodoForm from '../layout/NewTodoForm'
import Home from '../layout/Homesystem'
import Adminhome from '../layout/Adminhome'
import Tenichend from '../layout/tenichend'



const guestRouter = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Header />
      <Outlet />
    </>,
    children: [
      { index: true, element: <Home/> },
      { path: '/login', element: <LoginForm />},
      { path: '/register', element: <RegisterForm />},
      { path: '/home', element: <Home />},
      { path: '*', element: <p> PAGE NOT FOUND</p>}
    ]
  }
])

const userRouter = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Header />
      <Outlet />
    </>,
    children : [
      { index: true, element: <UserHome /> },
      { path: '/newrepair', element: <NewTodoForm />},
      { path: '/home', element: <Home />},
      { path: '*', element: <p> PAGE NOT FOUND</p>},
    ]
  }
])

const adminRouter = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Header />
      <Outlet />
    </>,
    children : [
      { index: true, element: <UserHome /> },
      { path: '/newrepair', element: <NewTodoForm />},
      { path: '/home', element: <Home />},
      { path: '/adminhome', element: <Adminhome />},
      { path: '/tec', element: <Tenichend />},
      { path: '*', element: <p> PAGE NOT FOUND</p>}
    ]
  }
])



export default function AppRouter() {
  const {user} = useAuth()
  // console.log(user?.role);
  const finalRouter = user?.id ?  (user.role === 'ADMIN' ? adminRouter : userRouter) : guestRouter
  return (
    <RouterProvider router={finalRouter} />
  )
}
