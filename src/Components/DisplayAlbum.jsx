import React from 'react';
import NavBar from './NavBar';
import { useParams } from 'react-router-dom';
import { albumsData, assets, songsData } from '../assets/assets';
import { PlayerContext } from '../Context/PlayerContextCreate';
function DisplayAlbum(){
    const {id} = useParams();
    const albumData = albumsData[id];
    const {playwithid} = React.useContext(PlayerContext);
    return <>
        <NavBar/>
        <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
            <img src={albumData.image} alt="" className='w-48 rounded ' />
            <div className="flex flex-col ">
                <p>PlayList</p>
                <h2 className='font-bold text-5xl mb-4 md:text-7xl '>{albumData.name}</h2>
                <h4>{albumData.desc}</h4>
                <p className="mt-1">
                    <img className='inline-block w-5 ' src={assets.spotify_logo} alt="" />
                    <b>Spotify </b>
                    .1,323,542 likes
                    .<b>50 Songs,</b>
                    about 3 hr 46 min
                </p>
            </div>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 pl-2 text-[#a7a7a7]">
            <p><b className='mr-4'>#</b>Title</p>
            <p>Album</p>
            <p className='hidden sm:block'>Date Added</p>
            <img className='w-4 m-auto 'src={assets.clock_icon} alt="" />
        </div>
        <hr />
        {
            songsData.map((item,index)=>(
                <div  onClick={()=>playwithid(item.id)}key={index} className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer">
                    <p className='text-white'>
                        <b className='mr-4 text-[#a7a7a7] '>{index+1}</b>
                        <img className="mr-5 inline w-10 " src={item.image} alt="" />
                        {item.name}
                    </p>
                    <p className='text-[15px]'>{albumData.name}</p>
                    <p className='text-[15px] hidden sm:block'>5 days ago</p>
                    <p className='text-[15px] text-center'>{item.duration}</p>
                </div>
            ))
        }
    </>
}

export default DisplayAlbum;