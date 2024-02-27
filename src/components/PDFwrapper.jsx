

import pdfImg from "./../assets/poster.png"
import bambooTexture from "./../assets/bamboo-print.png"
import posterPDF from "./../assets/poster.pdf"

export default function PDFWrapper(){
  return(
    <div className="w-screen min-h-max py-28 bg-medgreen relative">
      <img src={bambooTexture} className="h-full absolute left-24 top-0" />
      <img src={bambooTexture} className="h-full absolute right-24 rotate-180 top-0" />

      <div className="pdf-container h-fit w-full flex flex-col items-center gap-9">
        <img src={pdfImg} className="w-[40%]" />
        <button className="primary-btn"> <a href={posterPDF} download> DOWNLOAD PDF  </a></button>
      </div>

    </div>
  )
}