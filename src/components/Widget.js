import { KeyboardArrowUp, PersonOutlined } from '@mui/icons-material'
import React from 'react'
import './widget.scss'
const Widget = () => {
  return (
    <div className='widget'>
        <div className="left">
            <span className="title">USERS</span>
            <span className="counter">21354</span>
            <span className="link">See all users</span>
        </div>
        <div className="right">
            <div className="percentage">
                <KeyboardArrowUp />
            20%</div>
            <PersonOutlined className='icon'/>
        </div>
    </div>
  )
}

export default Widget