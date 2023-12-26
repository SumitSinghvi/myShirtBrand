import React from 'react'

export default function Secondhero() {
  return (
    <div>
        <div className="flex flex-col py-24">
            <p className="text-gray-500 font-Baskerville text-3xl text-center">Shop Custom Made-To-Measure Garments</p>
            <div className="mt-16 flex justify-between px-8">
                <div className="relative group border rounded-2xl shadow-lg flex flex-col justify-center items-center py-12">
                    <img src="https://institchu-cdn-v2.imgix.net/ui/laptop-illustration.png" alt="Click to design your own garment" className="w-1/2 cursor-pointer opacity-100 group-hover:opacity-0 transition-opacity duration-300"></img>
                    <p className="opacity-100 group-hover:opacity-0 transition-opacity duration-500 text-center mt-2 text-gray-500">DESIGN YOUR OWN</p>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center hover:bg-black rounded-2xl">
                        <p className="mb-4 px-6 text-center text-white">Design a one-of-a-kind custom garment to your taste, needs, and measurements</p>
                        <span className="border px-2 py-1 perfectfit cursor-pointer bg-white hover:text-red-400">Start Designing</span>
                    </div>
                </div>                               
                <div className="relative group border rounded-2xl shadow-lg flex flex-col justify-center items-center py-12">
                    <img src="https://institchu-cdn-v2.imgix.net/ui/measuring-tape-illustration.png" alt="Click to design your own garment" className="w-1/2 cursor-pointer opacity-100 group-hover:opacity-0 transition-opacity duration-300"></img>
                    <p className="opacity-100 group-hover:opacity-0 transition-opacity duration-500 text-center mt-2 text-gray-500">MADE-TO-MEASURE</p>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center hover:bg-black rounded-2xl">
                        <p className="mb-4 px-6 text-center text-white">Perfectly-fitted tailored garments, covered by our Perfect Fit Guarantee.</p>
                        <span className="border px-2 py-1 perfectfit cursor-pointer bg-white hover:text-red-400">Start Measuring</span>
                    </div>
                </div>
                <div className="relative group border rounded-2xl shadow-lg flex flex-col justify-center items-center py-12">
                    <img src="https://institchu-cdn-v2.imgix.net/ui/fabrics-illustration.png" alt="Click to design your own garment" className="w-1/2 cursor-pointer opacity-100 group-hover:opacity-0 transition-opacity duration-300"></img>
                    <p className="opacity-100 group-hover:opacity-0 transition-opacity duration-500 text-center mt-2 text-gray-500">PREMIUM FABRICS</p>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center hover:bg-black rounded-2xl">
                        <p className="mb-4 px-6 text-center text-white">Design unique garments from thousands of premium fabrics in different colours, patterns and weights.</p>
                        <span className="border px-2 py-1 perfectfit cursor-pointer bg-white hover:text-red-400">Browse Fabrics</span>
                    </div>
                </div>
                <div className="relative group border rounded-2xl shadow-lg flex flex-col justify-center items-center py-12">
                    <img src="https://institchu-cdn-v2.imgix.net/ui/shopping-bags-illustration.png" alt="Click to design your own garment" className="w-1/2 cursor-pointer opacity-100 group-hover:opacity-0 transition-opacity duration-300"></img>
                    <p className="opacity-100 group-hover:opacity-0 transition-opacity duration-500 text-center mt-2 text-gray-500">ONLINE OR IN-STORE</p>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center hover:bg-black rounded-2xl">
                        <p className="mb-4 px-6 text-center text-white">Visit your closest Showroom, or design and shop online using your saved measurements.</p>
                        <span className="border px-2 py-1 perfectfit cursor-pointer bg-white hover:text-red-400">Make a Booking</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="relative">
            <img className="w-full h-auto" style={{maxWidth: "100%", height: "auto"}} src="https://images.ctfassets.net/mmryouqzg0pp/6Juo2jAQIekgdSajFNwS56/9efe0f38a17f81ff781b3818d37eaa78/Weddings_Banner_homepade_1-min__1_.jpg" alt="wedding banner"></img>
            <div className="absolute inset-0 text-white flex flex-col justify-center items-center pt-24">
                <p className="text-xl tracking-wide py-4"> <span className="border-b border-white"> PERFECT FIT & PREMIUM FABRICS </span></p>
                <p className="text-4xl font-Baskerville py-4 pl-48">WEDDING WORTHY GARMENTS</p>
                <div className="mt-8 flex">
                    <button className="text-black perfectfit cursor-pointer bg-white hover:text-red-500 py-1 px-6">SHOP COLLECTION</button>
                    <button className="text-black perfectfit cursor-pointer bg-white hover:text-red-500 py-1 px-6 ml-8">BOOK APPOINTMENT</button>
                </div>
            </div>
        </div>        
        <div className="grid grid-cols-2 gap-4 mx-auto py-16 px-16">
            <div className="bg-gray-200 border border-gray-400 relative">
                <div className="h-80 bg-cover bg-center" style={{backgroundImage: "url('https://images.ctfassets.net/mmryouqzg0pp/1g4sR5AnyoPqn65EHjXsy8/92bb8d80f4dfcbdd28dd4275557e8d5d/Website_Work_Suits_Tile_1-min.jpg')"}}></div>
                <div className="absolute inset-0 flex flex-col items-start justify-end text-white ml-4 mb-4">
                    <p className="text-center font-Baskerville text-2xl">Work Suits</p>
                    <p className="text-center">Custom-made suits for corporate players</p>
                </div>
            </div>
            <div className="bg-gray-200 border border-gray-400 relative">
                <div className="h-80 bg-cover bg-center" style={{backgroundImage: "url('https://images.ctfassets.net/mmryouqzg0pp/5w0VMujzuISojZ12oMogGr/cc1038f7d4be44c5cf0611ca96fd167f/Website_WED_Tile_1-min__1_.jpg')"}}></div>
                <div className="absolute inset-0 flex flex-col items-start justify-end text-white ml-4 mb-4">
                    <p className="text-center font-Baskerville text-2xl">Formal Suits & Tuxedos</p>
                    <p className="text-center">Tailored formalwear, made to measure and taste</p>
                </div>
            </div>
            <div className="bg-gray-200 border border-gray-400 relative">
                <div className="h-80 bg-cover bg-center" style={{backgroundImage: "url('https://images.ctfassets.net/mmryouqzg0pp/4HJsAdLWILh2OmriSfwErH/0b7cdf14ea796ecb3896a900863fc835/Website_PFG_Tile_1-min__1_.jpg')"}}></div>
                <div className="absolute inset-0 flex flex-col items-start justify-end text-white ml-4 mb-4">
                    <p className="text-center font-Baskerville text-2xl">Perfect Fit Guarantee</p>
                    <p className="text-center">Discover the made-to-measure difference</p>
                </div>
            </div>
            <div className="bg-gray-200 border border-gray-400 relative">
                <div className="h-80 bg-cover bg-center" style={{backgroundImage: "url('https://images.ctfassets.net/mmryouqzg0pp/5StYJfKWsMO9hwCIT5744k/b84aeecd3146ce4b5431c7c0668ccf8c/Our_Showrooms_Tile_1-min__1_.jpg')"}}></div>
                <div className="absolute inset-0 flex flex-col items-start justify-end text-white ml-4 mb-4">
                    <p className="text-center font-Baskerville text-2xl">Our Showrooms</p>
                    <p className="text-center">Experience old-world tailoring at your closest Showroom</p>
                </div>
            </div>
        </div>
        <div className="relative">
            <img className="w-full h-auto" style={{maxWidth: "100%",  height: "auto"}} src="https://images.ctfassets.net/mmryouqzg0pp/5tndN4vuft0zMCle92FzS/05a6655bf4377168803a3c10f427585b/Work_Banner_homepade_1-min__1_.jpg" alt="wedding banner"></img>
            <div className="absolute inset-0 text-white flex flex-col p-16 justify-end">
                <p className="text-xl tracking-wide py-4"> <span className="border-b border-white"> PERFECT FIT & PREMIUM FABRICS </span></p>
                <p className="text-5xl font-Baskerville py-4">Custom Suiting For Work Wins</p>
                <div className="mt-8 flex">
                    <button className="text-black perfectfit cursor-pointer bg-white hover:text-red-500 py-1 px-6">SHOP COLLECTION</button>
                    <button className="text-black perfectfit cursor-pointer bg-white hover:text-red-500 py-1 px-6 ml-8">BOOK APPOINTMENT</button>
                </div>
            </div>
        </div>
    </div>
  )
}
