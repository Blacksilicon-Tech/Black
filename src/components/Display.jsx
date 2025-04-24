import React from "react";
import {Routes,Route} from 'react-router-dom'
import DisplayHome from "./DisplayHome.jsx";
import DisplayAlbum from "./DisplayAlbum";
import SongAlbum from "./SongAlbum.jsx";

const Display = () => {
  return (
    <div className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0">
        <Routes>
            <Route path='/' element={<DisplayHome />}/>
            <Route path='/album/:id' element={<DisplayAlbum />}/>  
            <Route path='/song /:id' element={<SongAlbum />}/>  
        </Routes>
    </div>
  );
};

export default Display;
