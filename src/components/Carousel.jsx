import { useState, useRef } from 'react';
import arrow_left from '../assets/icon.png';
import dot from '../assets/dot.png';
import dot_clicked from '../assets/dot_clicked.png';
import arrow_right from '../assets/icon_right.png';

const Carousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(1);
  const [prev2Index, setPrev2Index] = useState(2);
  const [nextIndex, setNextIndex] = useState(4);
  const [next2Index, setNext2Index] = useState(3);
  const carouselRef = useRef(null);
  let n = nextIndex;
  let n2 = next2Index;
  let p = prevIndex;
  let p2 = prev2Index;
  const updateIndex = (newIndex) => {
    let newN, newN2, newP, newP2;
  
    if (newIndex < 0) {
      newIndex = items.length - 1;
      newN = 3;
      newN2 = 2;
      newP = 0;
      newP2 = 1;
    } else if (newIndex >= items.length) {
      newIndex = 0;
      newN = 3;
      newN2 = 4;
      newP = 1;
      newP2 = 2;
    } else if (newIndex < activeIndex) {
      newN = n2;
      newN2 = p2;
      newP2 = p;
      newP = newIndex + 1;
    } else if (newIndex > activeIndex) {
      newP = p2;
      newP2 = n2;
      newN2 = n;
      newN = newIndex - 1;
    }
    if(newP === newIndex) {
      newP = newIndex + 1;
    }
    setNextIndex(newN);
    setNext2Index(newN2);
    setPrevIndex(newP);
    setPrev2Index(newP2);
    setActiveIndex(newIndex);
    console.log(nextIndex, next2Index, prevIndex, prev2Index, activeIndex);
  };

  const handleTouchStart = (event) => {
    const { clientX } = event.touches[0];
    const { left, width } = carouselRef.current.getBoundingClientRect();
    const touchPositionX = clientX - left;
    const isRightHalf = touchPositionX > width / 2;
    if (isRightHalf) {
      updateIndex(activeIndex + 1);
    } else {
      updateIndex(activeIndex - 1);
    }
  };
  

  return (
    <div className="overflow-hidden flex flex-col items-center justify-center w-[100%] md:w-[70%] mx-auto "
   
    onTouchStart={handleTouchStart}
    ref={carouselRef}>
      <div className="overflow-hidden whitespace-nowrap transition-transform duration-300">
        <div className="flex ml-[%] justify-center">
          <div className="carousel-image-wrapper" style={{ marginRight: '-30%', transform: 'scale(0.7)' }}>
            {items[prev2Index]}
          </div>
          <div className="carousel-image-wrapper" style={{ marginRight: '-20%', transform: 'scale(0.8)' }}>
            {items[prevIndex]}
          </div>
          <div className="carousel-image-wrapper active" style={{ zIndex: 2 }}>
            {items[activeIndex]}
          </div>
          <div className="carousel-image-wrapper" style={{ marginLeft: '-20%', transform: 'scale(0.8)', zIndex: 1 }}>
            {items[nextIndex]}
          </div>
          <div className="carousel-image-wrapper" style ={{ marginLeft: '-30%', transform: 'scale(0.7)' }}>
            {items[next2Index]}
          </div>
        </div>
      </div>
  
      <div className="carousel-buttons flex justify-center items-center mt-5">
        <button
          className="button-arrow"
          onClick={() => updateIndex(activeIndex - 1)}
        >
          <img src={arrow_left} alt="Left Arrow" />
        </button>
  
        <div className="justify-evenly flex items-center">
          {items.map((_, index) => (
            <button
              key={index}
              className="mr-2 ml-2 border-none cursor-pointer"
              onClick={() => updateIndex(index)}
            >
              <img src={index === activeIndex ? dot_clicked : dot} alt="Dot" />
            </button>
          ))}
        </div>
  
        <button
          className="button-arrow"
          onClick={() => updateIndex(activeIndex + 1)}
        >
          <img src={arrow_right} alt="Right Arrow" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
