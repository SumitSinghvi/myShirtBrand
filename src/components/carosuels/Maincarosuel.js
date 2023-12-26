import React , {useEffect} from 'react'
import $ from 'jquery';
import 'slick-carousel';

export default function Maincarosuel() {
    useEffect(() => {
        $('.bottom-carousel').slick({
            // Slick carousel options for the bottom divs
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            arrows:false,
            // Add more options as per your requirements
            // Use the afterChange event to handle dot color changes  
            
        });
    
        $('.bottom-carousel').on('afterChange', function(event, slick, currentSlide){
          $('.dot').css('color', ''); // Reset all dots to default color
          $('.dot[data-slide="' + currentSlide + '"]').css('color', 'red'); // Set active color to the current slide dot
        });
    
        $('.dot').on('click', function(){
          var slideIndex = $(this).data('slide');
          $('.bottom-carousel').slick('slickGoTo', slideIndex); // Go to the slide corresponding to the clicked dot
          // $('.dot').css('color', '');
          // $(this).css('color', 'red');
        });
        // Return a cleanup function if necessary
        return () => {
          $('.bottom-carosuel').slick('unslick');
          $('.bottom-carousel').off('afterChange');
          $('.dot').off('click');
        };
      }, []);
    $('.bottom-carousel').slick({
        // Slick carousel options for the bottom divs
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows:false,
        // Add more options as per your requirements
        // Use the afterChange event to handle dot color changes  
        
    });

    $('.bottom-carousel').on('afterChange', function(event, slick, currentSlide){
      $('.dot').css('color', ''); // Reset all dots to default color
      $('.dot[data-slide="' + currentSlide + '"]').css('color', 'red'); // Set active color to the current slide dot
    });

    $('.dot').on('click', function(){
      var slideIndex = $(this).data('slide');
      $('.bottom-carousel').slick('slickGoTo', slideIndex); // Go to the slide corresponding to the clicked dot
      // $('.dot').css('color', '');
      // $(this).css('color', 'red');
    });
  return (
    <div className="carousel-wrapper">
    <div className="text-center mb-14 top-carousel-dots">
        <div className="flex items-center justify-center gap-24 uppercase text-gray-500 text-xl font-bold">
          <span className="dot hover:text-red-400" style={{color: "red"}} data-slide="0">
            Affordable luxury
          </span>
          <span className="dot hover:text-red-400" data-slide="1">
            Perfect fit
          </span>
          <span className="dot hover:text-red-400" data-slide="2">
            One-of-a-kind
          </span>
          <span className="dot hover:text-red-400" data-slide="3">
            Online or In-Store
          </span>
        </div>
    </div>      
    
    <div className="bottom-carousel mx-10 my-14">
        <div>
            <div className="flex ">
                <div className="flex flex-col justify-center items-center">
                    <p className="text-3xl font-Baskerville text-gray-600 leading-relaxed ">Up to 25% off wedding parties, with tailored suits starting from $599.</p>
                    <span className="border border-black mt-4 px-6 py-2 perfectfit cursor-pointer hover:text-red-400">FIND OUT MORE</span>
                </div>
                <img className="w-1/2" src="https://institchu-cdn-v2.imgix.net/home-page/affordable_luxury_rev.png?h=600&q=100&sharp=30&?bri=11" alt="Post 1"></img>
            </div>
        </div>
        <div>
            <div className="flex ">
                <div className="flex flex-col justify-center items-center">
                    <p className="text-3xl font-Baskerville text-gray-600 leading-relaxed" >Made-to-measure tailoring for any size and any body type.</p>
                    <span className="border border-black mt-4 px-6 py-2 perfectfit cursor-pointer hover:text-red-400">FIND OUT MORE</span>
                </div>
                <img className="w-1/2" src="https://institchu-cdn-v2.imgix.net/home-page/perfect_fit_rev.png?h=600&q=100&sharp=30&?bri=11" alt="Post 1"></img>
            </div>
        </div>
        <div>
            <div className="flex ">
                <div className="flex flex-col justify-center items-center">
                    <p className="text-3xl font-Baskerville text-gray-600 leading-relaxed ">Design a completely unique (and wedding worthy) garment.</p>
                    <span className="border border-black mt-4 px-6 py-2 perfectfit cursor-pointer hover:text-red-400">FIND OUT MORE</span>
                </div>
                <img className="w-1/2" src="https://institchu-cdn-v2.imgix.net/home-page/one_of_a_kind_rev.png?h=600&q=100&sharp=30&?bri=11" alt="Post 1"></img>
            </div>
        </div>
        <div>
            <div className="flex ">
                <div className="flex flex-col justify-center items-center">
                    <p className="text-3xl font-Baskerville text-gray-600 leading-relaxed ">Find your closest Showroom as a group or individually, or measure and order online.</p>
                    <span className="border border-black mt-4 px-6 py-2 perfectfit cursor-pointer hover:text-red-400">FIND OUT MORE</span>
                </div>
                <img className="w-1/2" src="https://institchu-cdn-v2.imgix.net/home-page/online_or_instore_rev.png?h=600&q=100&sharp=30&?bri=11" alt="Post 1"></img>
            </div>
        </div>
    </div>
    </div>
  )
}
