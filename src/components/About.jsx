
import rightBamboo from "./../assets/right-bamboo.png"
import leftBamboo from "./../assets/left-bamboo.png"

export default function About(){
  return(
    <div className="w-screen h-screen relative">
      <img src={leftBamboo} className="absolute left-0 bottom-0 w-1/4 mix-blend-luminosity" />
      <img src={rightBamboo} className="absolute right-0 bottom-0 h-[95%] translate-x-[4rem] mix-blend-color-dodge " />

      <p className="w-1/2 h-[60%] absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] overflow-y-scroll text-center
      leading-8 text-xl">
      In the pursuit of a sustainable and eco-friendly future, individuals are increasingly turning to natural materials that not only stand the test of time but also leave a minimal environmental footprint. One such material that has gained prominence for its versatility, durability, and eco-friendliness is cane.
Cane, derived from the stems of certain varieties of bamboo or rattan plants, has been an integral part of human history for centuries. Its applications range from furniture and handicrafts to construction and even fashion. What makes cane truly remarkable is its exceptional strength, lightweight, and renewability, making it a standout choice for those seeking sustainable alternatives.
The durability of a cane is one of its most noteworthy attributes. Unlike traditional materials that might degrade over time, cane possesses natural resilience, ensuring that products crafted from it have a longer lifespan. This durability translates to cost savings for consumers and reduces the overall environmental impact associated with frequent replacements and disposals.
Cane's importance in promoting sustainability cannot be overstated. As a rapidly renewable resource, it grows at a much faster rate compared to traditional timber, making it an eco-friendly option for various applications. Choosing cane over non-renewable materials helps mitigate deforestation, conserve forests, and preserve biodiversity. Moreover, cane cultivation requires minimal water and pesticides, further contributing to its eco-friendly profile.
In furniture, cane has emerged as a stylish and sustainable choice. Its natural aesthetics add warmth and a touch of nature to any living space. Cane furniture is not only timeless in design but also adaptable to various decor styles, making it a versatile option for those who appreciate both aesthetics and sustainability.
Beyond furniture, cane finds its place in everyday items such as baskets, lampshades, and even clothing accessories. The versatility of this material makes it a go-to option for those who wish to embrace sustainability in all aspects of their lives.
The shift towards cane is not just a personal choice; it is a step towards building a sustainable future for our planet. By consciously opting for products made from cane, individuals contribute to the reduction of carbon footprints and promote responsible consumption. As consumers become more aware of the environmental impact of their choices, the demand for sustainable materials like cane is likely to grow, encouraging industries to adopt more eco-friendly practices.
In conclusion, cane stands as a symbol of durability, versatility, and sustainability. Choosing cane products is not just a lifestyle choice; it is a conscious decision to support a greener and more sustainable future. As we navigate the challenges of environmental conservation, let us turn to the strength and resilience of cane, paving the way for a more durable and sustainable world.
      </p>

    </div>
  )
}