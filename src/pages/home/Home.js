import React from 'react'
import Sidebar from '../../components/Sidebar'
import './home.scss'
const Home = () => {
  return (
    <div className='home'>
        <Sidebar />
        <div className="home-container">
            home container
        </div>
    </div>
  )
}

export default Home