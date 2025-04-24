import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { songsData, assets} from '../assets/assets';

const SongAlbum = () => {

    const {id} = useParams();
    const songData = songsData[id];

  return (
    <>
      <Navbar />
      <div className='flex flex-col gap-8 mt-10 md:flex-row md:items-end'>
        <img className='w-48 rounded' src={songData.image} alt="" />
        <div className='flex flex-col'>
            <p>Playlist</p>
            <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{songData.name}</h2>
            <h4 className=''>{songData.desc}</h4>
            <p className='mt-1'>
                <img className='inline-block w-5' src={assets.spotify_logo} alt="" />
                <b>Spotify</b>
                *1,323,154 likes
                *<b>50 songs, </b>
                about 2 hr 30 mins
            </p>
        </div>
    </div>      
    </>
  )
}

export default SongAlbum
