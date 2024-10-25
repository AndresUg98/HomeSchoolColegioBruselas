// import { useRoutes } from 'react-router-dom'
import Home from '../Home/index'
import Login from '../Login/index'
import Profile from '../Profile/index'
import SubjectClass from '../SubjectClass/index'
import VideoClass from '../VideoClass/index'

import './App.css'
function App() {

  // let routes = useRoutes([
  //   {
  //     path: '/',
  //     element: <Home/>
  //   }
  // ])
  
  return (
    <>
      <Home/>
      <Login/>
      <Profile/>
      <SubjectClass/>
      <VideoClass/>

    </>
  )
}

export default App
