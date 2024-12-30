import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import Forbidden from "./pages/Forbidden";
import Protected from './pages/Protected'
import Layout from './pages/Layout'
import { useAuth } from "./components/Authenticator";

import './App.css'
import Authenticator from "./components/Authenticator";

// eslint-disable-next-line react/prop-types
const RequireAuthRoute = ({ element }) => {
    const { isAuthorized } = useAuth();
    return isAuthorized ? element : <Forbidden />;
};


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/protected',
                element: <RequireAuthRoute element={<Protected />}/>,
            },
            {
                path: '/403',
                element: <Forbidden />,
            }
        ]
    }
])

function App() {
  return (
    <>
        <Authenticator>
            <RouterProvider router={router}/>
        </Authenticator>
    </>
  )
}

export default App
