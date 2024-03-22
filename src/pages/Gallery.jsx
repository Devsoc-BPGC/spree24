import React from 'react'
import Carousel from '../components/Carousel';
import img1 from '../assets/Gallery/i1.png'
import img2 from '../assets/Gallery/i2.png'
import img3 from '../assets/Gallery/i3.png'
import img4 from '../assets/Gallery/i4.png'
import img5 from '../assets/Gallery/i5.png'
import img6 from '../assets/Gallery/i6.png'
import bgimg from '../assets/Gallery/bggal.png'



const IMAGES = [
  <img src={img1} alt="Slide 1" loading="lazy" className="h-full w-full rounded-[30px] object-cover object-center overflow-hidden max-md:aspect-square" />,
  <img src={img2} alt="Slide 2" loading="lazy" className="h-full w-full rounded-[30px] object-cover object-center overflow-hidden max-md:aspect-square" />,
  <img src={img3} alt="Slide 3" loading="lazy" className="h-full w-full rounded-[30px] object-cover object-center overflow-hidden max-md:aspect-square" />,
  <img src={img4} alt="Slide 4" loading="lazy" className="h-full w-full rounded-[30px] object-cover object-center overflow-hidden max-md:aspect-square" />,
  <img src={img5} alt="Slide 5" loading="lazy" className="h-full w-full rounded-[30px] object-cover object-center overflow-hidden max-md:aspect-square" />,
  <img src={img6} alt="Slide 6" loading="lazy" className="h-full w-full rounded-[30px] object-cover object-center overflow-hidden max-md:aspect-square" />
];


function Gallery() {
  return (
    <div className="max-md:overflow-hidden min-h-screen bg-[#F7A23F] flex justify-center" style={{ backgroundImage: `url(${bgimg})`, backgroundSize: 'cover' }}>
      <div className="h-full ">
      <h1 className="text-center ml-0 mb-10 mt-5 font-medium text-white text-6xl font-Rampart text-[2.2rem] lg:text-[4.5rem] text-shadow-orange-stroke">GALLERY</h1>
      <div className='lg:bg-[#005C65] py-10'>

      <Carousel items={IMAGES}/>
      </div>
      </div>
    </div>
  )
}

export default Gallery
