import React, { useEffect, useRef } from 'react'

function Carrousel() {
  const ref = useRef();
  const images = [
    'https://cdn.gameplanet.com/wp-content/uploads/2023/03/31183128/Preventa_Consola_Zelda_Slide_mvk.jpg',
    'https://cdn.gameplanet.com/wp-content/uploads/2023/03/23195523/Resident4_Disponible_slide_mvk_v2.jpg',
    'https://cdn.gameplanet.com/wp-content/uploads/2023/03/16194405/wwe-2k23-disponible_mvk-2.jpg',
    'https://cdn.gameplanet.com/wp-content/uploads/2023/03/17122033/BAYONETTAdisponible_mvk-2.jpg',
    'https://cdn.gameplanet.com/wp-content/uploads/2023/03/15194920/starwarsjedi-suv_preventa_mvk.jpg',
    'https://cdn.gameplanet.com/wp-content/uploads/2023/03/15192250/hogwartsDISP_mvk.jpg'
  ];
  useEffect(() => {
    let images = ref.current.querySelectorAll("img"),
      total = images.length,
      current = 0;
    const imageSlider = () => {
      images[(current > 0 ? current : total) - 1].classList.add("opacity-0");
      images[current].classList.remove("opacity-0");
      current = current === total - 1 ? 0 : current + 1;
    };
    imageSlider();
    let interval = setInterval(imageSlider, 4000);
    return () => {
      clearInterval(interval);
    };
  }, [ref]);

  const handleSearch =(e)=>{
    setSearchTerm(e.target.value);
}

  return (
    <div className='bg-gray-100 h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[600px] py-4 shadow-sm'>
      <div className='max-w-[1400px] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[500px] m-auto pt-4 px-4 relative group shadow-xl' ref={ref}>
      {images.map((image, key) => (
        <img
          key={key}
          className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
          src={image}
          alt=""
        />
      ))} 
    </div>

    </div>
    
  );
}

export default Carrousel;
