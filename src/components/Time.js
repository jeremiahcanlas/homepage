import React,{useEffect,useState} from 'react';
import {motion} from 'framer-motion'
import Greeting from './Greeting';

const Time = () => {

    const [time,setTime] = useState(new Date())

    const tick = () => {
        setInterval(()=>{
            setTime(new Date())
        },1000)
    }

    useEffect(()=>{
        tick()
        return () => {
            clearInterval(tick)
        }
    },[time])

    const currentTime = time.toLocaleString('en-US',{hour:'2-digit',minute:'numeric',hour12:true});

    const currentDate = time.toLocaleString('en-US',{dateStyle:'full'}).toUpperCase()
    

    return (
        
        <motion.div
         className='time-container'
         initial={{y:60}}
         animate={{y:0}}
         transition={{duration:1.2}}
         >
            <h2><Greeting/></h2>
            <h1>{currentTime}</h1>
            <h2>{currentDate}</h2>
            
        </motion.div>
        
    );
}

export default Time;
