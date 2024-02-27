import bgImg from "./../assets/background.png"
import foreImg from "./../assets/foreground.png"
import { useEffect, useRef, useState } from "react"

export default function Landing(){
  const [offset, setOffset] = useState(20);
  const textRef = useRef(null)

  useEffect(()=>{
    let totalHeight = document.body.offsetHeight;

    const scrollHandler = (e) => {
      let x = offset - (window.pageYOffset / totalHeight * 100);
      console.log(x)
      textRef.current.style.left = `${x}%`
    }
    
    window.addEventListener("scroll", scrollHandler)
    return () => window.removeEventListener("scroll", scrollHandler)
  }, [])


  return(
    <div className=" h-screen w-screen relative">
      <img src={bgImg} className="w-screen h-screen absolute" />
      <div className={`absolute -translate-y-1/2 top-1/2  w-full  text-center flex flex-col items-center left-[${offset}%] landing-text`} ref={textRef}>
        <h1 className="text-[7rem] "> EMBRACING CANE </h1>
        <h3 className="text-[2.5rem] w-1/2">A SUSTAINABLE STEP TOWARDS A DURBALE FUTURE</h3>
      </div>
      <img src={foreImg} className="w-screen h-screen absolute" />
    </div>
  )
}

