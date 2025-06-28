import { useGSAP } from '@gsap/react'
import gsap from 'gsap' 
import {SplitText} from 'gsap/all'

import React from 'react'

const Hero = () => {
      useGSAP(() => { 
        const HeroSplit = new SplitText('.title',{
            type:'chars, words'
        });

        const paraSplit = new SplitText(".subtitle",{
            type:'lines'
        });

        HeroSplit.chars.forEach((char)=>char.classList.add("text-gradient"))

        gsap.from(HeroSplit.chars,{
            yPercent:100,
            duration:1.8,
            ease:'expo.Out',
            stagger:0.05
        })

        gsap.from(paraSplit.lines,{
            yPercent:100,
            duration:1.8,
            opacity:0,
            ease:'expo.Out',
            delay:1, 
            stagger:0.05
        })

        gsap.timeline({
            scrollTrigger:{
                trigger:"#hero",
                start:"top top",
                end:"bottom top",
                scrub:true,
            }
        })
         .to(".left-leaf",{
            yPercent:-200
        },0)
        .to(".right-leaf",{
            yPercent:200
        },0)
       
    },[])
  return (
    <>
        <section id='hero' className='noisy'>
          <h1 className='title'>MOJITO</h1>
          <img src="/images/hero-left-leaf.png" className='left-leaf' alt="leaft-leaf" />
          <img src="/images/hero-right-leaf.png" className='right-leaf' alt="right-leaf" />
          <div className="body">
            <div className="content">
              <div className='space-y-5 hidden md:block'>
                <p>Cool. Crips. Classic. </p>
                <p className='subtitle'>Sip the Spirit of Summer</p>
                </div>
                <div className="view-cocktails">
                    <p className='subtitle'>
                    Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes — designed to delight your senses. 
                    </p>
                    <a href="#cocktails">View Cocktails</a>
                </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Hero