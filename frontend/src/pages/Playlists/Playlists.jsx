import React from 'react'
import Myplaylists from '../../components/Myplaylists/Myplaylists'
import './Playlists.css'
import Sidebar from '../../components/Sidebar/Sidebar'

function Playlists({playlist}) {
  return (
    
    <div className='playlist-container'>
        {/* <Sidebar /> */}
        <Myplaylists/></div>
  )
}

export default Playlists