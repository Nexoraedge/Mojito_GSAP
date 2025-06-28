import { useGSAP } from '@gsap/react'
import gsap from 'gsap' 
import { SplitText, ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'
import { useMediaQuery } from 'react-responsive'

const Hero = () => {
    const videoRef = useRef()
    const isMobile = useMediaQuery({ maxWidth: 768 })
    gsap.registerPlugin(ScrollTrigger)

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
            duration:1.6,
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

        const StartValue=isMobile?'center 50%':'center 60%';
        const EndValue=isMobile?'120% top':'bottom top';


        // --- Scroll-linked video scrub ---
    

        let tl = gsap.timeline({
            scrollTrigger: {
               trigger: "video",
               start: StartValue,
               end: EndValue,
               scrub: true,
               pin: true,
            },
           });
           
           videoRef.current.onloadedmetadata = () => {
            tl.to(videoRef.current, {
               currentTime: videoRef.current.duration,
            });
            };
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
        <div className="video absolute inset-0">
            <video src="/videos/output.mp4" playsInline preload='auto' loop ref={videoRef} muted />
        </div>
    </>
  )
}

export default Hero