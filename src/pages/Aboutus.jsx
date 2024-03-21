/* eslint-disable react/jsx-key */
import desc from '../assets/desc.png';
import Carousel from '../components/Carousel';
import SimpleSlider from '../components/ImageGallery';
import item1 from '../assets/SlideItem1.png';
import item2 from '../assets/SlideItem2.png';
import item3 from '../assets/SlideItem3.png';
import item4 from '../assets/SlideItem4.png';
import item5 from '../assets/SlideItem5.png';
import bg_aboutus from '../assets/bg_aboutus.png';
import football from '../assets/football.png';

const Slides = [
  <img src={item1} alt="Slide 1" className="w-800 h-400" />,
  <img src={item2} alt="Slide 2" className="w-800 h-400" />,
  <img src={item3} alt="Slide 3" className="w-800 h-400" />,
  <img src={item4} alt="Slide 4" className="w-800 h-400" />,
  <img src={item5} alt="Slide 5" className="w-800 h-400" />
];

function AboutUs() {
  return (
    <div className="h-screen md:h-full md:bg-cover bg-auto" style={{ backgroundImage: `url(${bg_aboutus})`}}>
      <div className="flex flex-col justify-start bg-contain md:bg-auto" style={{
        backgroundImage: `url(${football})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center left',
        backgroundPositionX: '17%' 
      }}>
        <div className="ml-6 mt-4 text-white">
          <h1 className="text-4xl md:text-7xl font-medium text-shadow-orange-stroke  font-Rampart">ABOUT US</h1>
        </div>
        <div className='w-screen flex flex-col mb-[7%]'>
          <img src={desc} alt="desc" className="ml-[-2] mt-2 w-[80%] h-[80%] md:w-[35%] md:h-[35%]" />
          <br></br>
          <div className='items-end'><SimpleSlider className='items-end'/></div>
        </div>
        </div>
        <br></br>
        <div className='flex flex-col justify-center'>
          <div className="text-white items-center mx-auto">
            <h1 className="text-4xl md:text-7xl font-medium text-shadow-orange-stroke font-Rampart">SPORTS</h1>
          </div>
          <Carousel items={Slides} />
        </div>
    </div>
  );
}

export default AboutUs;
