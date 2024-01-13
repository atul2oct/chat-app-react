import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
import { useContext } from 'react'
import { RefreshContext } from '../context/RefreshContext'

const Home = () => {
  const {isRefreshed} = useContext(RefreshContext);
  return (
    <div className='home'>
      <div className="container">
        <Sidebar/>
        {isRefreshed ? (
          <div className="noChat">
            <p>No Chats Started</p>
          </div>
        ) : <Chat/>}
        
      </div>
    </div>
  )
}

export default Home