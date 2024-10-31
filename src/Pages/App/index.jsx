import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home/index'
import Login from '../Login/index'
import Profile from '../Profile/index'
import SubjectClass from '../SubjectClass/index'
import VideoClass from '../VideoClass/index'

import './App.css'

const Approutes = () =>{
  let routes = useRoutes([
    {path: '/',element: <Home/>},
    {path: '/login',element: <Login/>},
    {path: '/profile',element: <Profile/>},
    {path: 'sub-class',element: <SubjectClass/>},
    {path: '/vid-class',element: <VideoClass/>},
    {path: '/}',element: <Home/>}
  ])
  return routes
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Approutes/>
      </BrowserRouter>

    </>
  )
}

export default App
