import React from 'react';
import './ImageCarousel.css';
import { useSelector } from 'react-redux';


const ImageCarousel = () => {

  const pageType = useSelector(state => state.ui.pageType);

  return (
    <>
      { (pageType === "carousel") && 
        <div className='main-container'>

        </div>
      }
    </>
  );
}

export default ImageCarousel;
