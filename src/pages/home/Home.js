import React from 'react'
import NavBar from '../../components/NavBar'
import Sidebar from '../../components/Sidebar'
import Widget from '../../components/Widget'
import './home.scss'
const Home = () => {
  return (
    <div className='home'>
        <Sidebar />
        <div className="home-container">
          <NavBar/>
            <div className="widgets">
              <Widget />
              <Widget />
              <Widget />
              <Widget />
            </div>
        </div>
    </div>
  )
}

export default Home