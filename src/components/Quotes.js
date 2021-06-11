import React,{useEffect,useState} from 'react';
import axios from 'axios'
import {motion} from 'framer-motion' 

const Quotes = () => {
    const [quote,setQuote] = useState('')

    useEffect(() => {
        getQuote()

        const intervalQ = setInterval(() => {
            getQuote()
        },60000)

        return () => {
            clearInterval(intervalQ)
        }
    },[])

    //randomizes, params passed is the length 
    const randomizer = (num) => {
        return Math.floor(Math.random()*num)
    }


    //grabs quotes from an external api
    const getQuote = () =>  axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    .then((res) => {
        //need length and quotes for this
        const quote = res.data.quotes[randomizer(res.data.quotes.length)]
        setQuote(quote)
    })


    return (   
        <motion.div
         className='quote-container'
         initial={{x:30,opacity:0}}
         animate={{x:0,opacity:1}}
         transition={{duration:2}}
        >
            <h2 >{quote.quote}</h2>
            <p>{quote.author}</p> 
        </motion.div>
    );
}

export default Quotes;
