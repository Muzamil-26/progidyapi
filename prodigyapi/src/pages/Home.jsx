import React from 'react'
import Page1 from '../components/Page1'
import Page2 from '../components/Page2'
import Page3 from '../components/Page3'

const Home = () => {
  return (
    <div className='w-full flex flex-col items-center'>
        <Page1/>
        <Page2/>
        <Page3/>
    </div>
  )
}

export default Home
