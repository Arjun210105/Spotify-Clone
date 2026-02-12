import { useEffect } from 'react';
import { useRef , useState} from 'react';
import { songsData } from '../assets/assets';
import { PlayerContext } from './PlayerContextCreate';

const PlayerContextProvider =(props)=>{
    const audioRef = useRef();
    const seekbg = useRef();
    const seekbar = useRef();

    const [track,settrack] = useState(songsData[1]);
    const [playstatus,setplaystatus] = useState(false);
    const [time ,settime] = useState({
        currenttime:{
            second:0,
            minute:0
        },
        totaltime:{
            second:0,
            minute:0
        }
    });
    const play=()=>{
        audioRef.current.play();
        setplaystatus(true);
    }

    const pause=()=>{audioRef.current.pause(); setplaystatus(false); }
    const playwithid = async (id)=>{
        await settrack(songsData[id]);
        await audioRef.current.play();
        setplaystatus(true);
    }

    const previous = async()=>{
        if(track.id>0){
            await settrack(songsData[track.id-1]);
            await audioRef.current.play();
            setplaystatus(true);
        }
    }
    const next = async()=>{
        if(track.id < songsData.length-1){
            await settrack(songsData[track.id+1]);
            await audioRef.current.play();
            setplaystatus(true);
        }
    }
    const seeksong = async(event)=>{
        audioRef.current.currentTime = (event.nativeEvent.offsetX / seekbg.current.offsetWidth) * audioRef.current.duration; 
    }

    const ContextValue ={
        audioRef,
        seekbar,
        seekbg,
        track,
        settrack,playstatus, setplaystatus, time, settime ,play,pause,playwithid,previous,next,seeksong
    }

    
    useEffect(()=>{
        setTimeout(()=>{ 
            audioRef.current.ontimeupdate=()=>{
                seekbar.current.style.width = (Math.floor(audioRef.current.currentTime)/Math.floor(audioRef.current.duration))*100 + '%';
                settime({currenttime:{ second:Math.floor(audioRef.current.currentTime%60), minute:Math.floor(audioRef.current.currentTime/60) },
                totaltime:{ second:Math.floor(audioRef.current.duration%60), minute:Math.floor(audioRef.current.duration/60) }})
            }
        },1000)
    },[audioRef])

    return (
        <PlayerContext.Provider value={ContextValue}>
            {props.children} 
        </PlayerContext.Provider>
    )

}

export default PlayerContextProvider;
