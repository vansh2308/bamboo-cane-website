import bgImg from "./../assets/background.png"
import foreImg from "./../assets/foreground.png"

export default function Landing(){
  return(
    <div className=" h-screen w-screen relative">
      <img src={bgImg} className="w-screen h-screen absolute" />
      <div className=" absolute -translate-y-1/2 top-1/2  w-full  text-center flex flex-col items-center">
        <h1 className="text-[7rem] "> EMBRACING CANE </h1>
        <h3 className="text-[2.5rem] w-1/2">A SUSTAINABLE STEP TOWARDS A DURBALE FUTURE</h3>
      </div>
      <img src={foreImg} className="w-screen h-screen absolute" />
    </div>
  )
}