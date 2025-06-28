import React from 'react'
import {ScrollTrigger ,  SplitText} from 'gsap/all'
import { gsap } from 'gsap'

 gsap.registerPlugin(ScrollTrigger , SplitText);

const App = () => {
  return (
    <>
    <div className='flex-center h-screen'>
        
    <div className='text-3xl font-bold underline'>Holllyy</div>
    </div>
    </>
  )
}

export default App