import React,{useState,useEffect} from 'react'
import { graphql,useStaticQuery } from 'gatsby';
import {getImage,GatsbyImage} from 'gatsby-plugin-image';
import {motion} from 'framer-motion'


export default function Cover() {



    const query = useStaticQuery(graphql`

    query {
        allImageSharp{
        nodes{
            gatsbyImageData(transformOptions:{fit:COVER,cropFocus:ATTENTION})
        }
        }
        }
        
    `)

    

    //the list
    const images = query.allImageSharp.nodes
    const length = images.length

    const randomizer = Math.floor(Math.random()*length)
    const[current,setCurrent] = useState(randomizer)
    


    useEffect(() => {
        const timer = setTimeout(() => {
            current === length -1?setCurrent(0):setCurrent(current+1)
        },4000)

        return () => clearTimeout(timer) //this will unmount the timer and wont mess up the timeout
    },[current,length])


    return (
        <div className='cover'>

            {images.map((img,index)=> {

                const image = getImage(img)
               

                  return  current === index && 
                    
                    <motion.div  initial={{opacity:0}} animate={{opacity:1}}  key={index+3} transition={{duration:1}}>
                        <div className='overlay'/>
                        <GatsbyImage image={image}  className='image' alt='none'/>
                    </motion.div>   
                

               
            }
            )} 
        </div>
    )
}
