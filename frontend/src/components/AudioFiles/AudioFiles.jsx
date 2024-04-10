
import './AudioFiles.css'


function AudioFiles({song,getSongData,index}) {
  if (!song) {
    return <div>No song selected</div>;
  }
  return (
    <div className="player-container" onClick={()=>getSongData(song,index)}>
        <h5 className='song-name'>{song.name}</h5>
        
        </div>
  )
}

export default AudioFiles