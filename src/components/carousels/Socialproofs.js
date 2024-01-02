import React , { useEffect } from 'react'
import $ from 'jquery';
import 'slick-carousel';

export default function Socialproofs() {
    useEffect(() => {
        $('.slick-carousel').slick({
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2500,
          arrows: false,
        });
        return () => {
          // Destroy the slick carousel when the component unmounts
          $('.slick-carousel').slick('unslick');
          // Remove any event listeners if added
          // $('.bottom-carousel').off('afterChange');
          // $('.dot').off('click');
        };
      }, []);
  
    return (
    <div className="mx-10 my-20">
        <div className="h-8 flex items-center mb-5">    
        <p className="font-Baskerville text-3xl">Custom(er) Weddings</p>
        <p className="ml-auto text-xl">#BarucheWeddings</p>
        </div>
        <div className="slick-carousel">
            {/* <!-- Posts will be dynamically inserted here --> */}
            <div className="w-1/4 m-5"><img src="https://cutewallpaper.org/21/anime-trees-background/Anime-Tree-Background-98-images-in-Collection-Page-3.jpg" alt="Post 1"></img></div>
            <div className="w-1/4 m-5"><img src="https://cutewallpaper.org/21/anime-trees-background/Anime-Tree-Background-98-images-in-Collection-Page-3.jpg" alt="Post 1"></img></div>
            <div className="w-1/4 m-5"><img src="https://cutewallpaper.org/21/anime-trees-background/Anime-Tree-Background-98-images-in-Collection-Page-3.jpg" alt="Post 1"></img></div>
            <div className="w-1/4 m-5"><img src="https://cutewallpaper.org/21/anime-trees-background/Anime-Tree-Background-98-images-in-Collection-Page-3.jpg" alt="Post 1"></img></div>
            <div className="w-1/4 m-5"><img src="https://cutewallpaper.org/21/anime-trees-background/Anime-Tree-Background-98-images-in-Collection-Page-3.jpg" alt="Post 1"></img></div>
            <div className="w-1/4 m-5"><img src="https://cutewallpaper.org/21/anime-trees-background/Anime-Tree-Background-98-images-in-Collection-Page-3.jpg" alt="Post 1"></img></div>
            <div className="w-1/4 m-5"><img src="https://cutewallpaper.org/21/anime-trees-background/Anime-Tree-Background-98-images-in-Collection-Page-3.jpg" alt="Post 1"></img></div>
            <div className="w-1/4 m-5"><img src="https://cutewallpaper.org/21/anime-trees-background/Anime-Tree-Background-98-images-in-Collection-Page-3.jpg" alt="Post 1"></img></div>
            <div className="w-1/4 m-5"><img src="https://cutewallpaper.org/21/anime-trees-background/Anime-Tree-Background-98-images-in-Collection-Page-3.jpg" alt="Post 1"></img></div>
            {/* <!-- Add more posts as needed --> */}
        </div>
    </div>
  )
}
