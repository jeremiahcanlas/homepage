import * as React from "react"
import '../style/main.scss'
import {Helmet} from 'react-helmet'
import App from '../components/App'


// markup
const IndexPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8'/>
        <html lang='en'/>
        <title>Homepage by Jeremiah</title>
        <meta name="description" content="Personal Homepage" />
      </Helmet>
      <App/>
    </>
    
  )
}

export default IndexPage
