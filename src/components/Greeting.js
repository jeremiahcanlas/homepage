import React,{useEffect,useState} from 'react';

const Greeting = () => {

    const [greet,setGreet] = useState('')

    //sets the greeting depends on the 24 hr clock
    const greeting = () => {

        const hours = new Date().getHours()

        return hours >= 18? setGreet('Good evening,'):
        hours >= 12? setGreet('Good afternoon,'):
        hours >= 5? setGreet('Good morning,'):
        setGreet('Early morning,')
    }

    useEffect(() => {
        greeting()
    },[greet])


    return  <span> {greet.toUpperCase()} JEREMIAH</span>
    
}



export default Greeting;
