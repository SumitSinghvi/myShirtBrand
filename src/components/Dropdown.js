import React from 'react'

export default function Dropdown({whichelement}) {
    return ( whichelement === 'Shop' ?
        <div className='w-auto mt-6 flex justify-between pr-10 shadow-md absolute'>
            <div className='flex px-10 py-4 gap-20 lesssizetext'>
                <div className='flex flex-col gap-1.5 hover:cursor-pointer'>
                    <p className='font-bold text-xs mb-1 hover:underline'>DRESS SHIRTS</p>
                    <p className='hover:underline'>Business shirts</p>
                    <p className='hover:underline'>Work shirts</p>
                    <p className='mb-4 hover:underline'>casual shirts</p>
                    <p className='font-bold text-xs hover:underline'>OVERSHIRTS</p>
                    <p className='font-bold text-xs hover:underline'>POLO SHIRTS</p>
                    <p className='font-bold text-xs hover:underline'>T-SHIRTS</p>
                </div>
                <div className='flex flex-col gap-1.5 hover:cursor-pointer'>
                    <p className='font-bold text-xs hover:underline'>PANTS</p>
                    <p className='hover:underline'>Chinos</p>
                    <p className='hover:underline'>Suit pants</p>
                    <p className='mb-4 hover:underline'>Shorts</p>
                    <p className='font-bold text-xs hover:underline'>SUITS</p>
                    <p className='hover:underline'>Suit jackets</p>
                    <p className='hover:underline'>Suit pants</p>
                </div>
                <div className='flex flex-col gap-1.5 hover:cursor-pointer'>
                    <p className='font-bold text-xs hover:underline'>FABRICS</p>
                    <p className='hover:underline'>Fabrics sample kit</p>
                    <p className='hover:underline'>Suit fabrics</p>
                    <p className='hover:underline'>Shirt fabrics</p>
                    <p className='hover:underline'>Chino fabrics</p>
                    <p className='hover:underline'>Polo shirt fabrics</p>
                    <p className='mb-4 hover:underline'>T-shirt fabrics</p>
                    <p className='font-bold text-xs hover:underline'>OTHERS</p>
                    <p className='hover:underline'>Belts</p>
                    <p className='hover:underline'>Ties</p>
                </div>
            </div>
            <div className='flex gap-2'>
                <div className="relative">
                    <img
                        src="/imageinshop.jpg" // Replace with your image URL
                        alt="man of 180/270"
                    />
                    <div className="absolute bottom-12 left-0 right-0 text-center text-red-400 py-2">
                        <p className="text-sm">Your Text Label</p>
                    </div>
                </div>
                    <div className="relative">
                        <img
                            src="/imageinshop.jpg" // Replace with your image URL
                            alt="man of 180/270"
                        />
                        <div className="absolute bottom-12 left-0 right-0 text-center text-red-400 py-2">
                            <p className="text-sm">Your Text Label</p>
                        </div>
                    </div>
                <div className="relative">
                    <img
                        src="/imageinshop.jpg" // Replace with your image URL
                        alt="man of 180/270"
                    />
                    <div className="absolute bottom-12 left-0 right-0 text-center text-red-400 py-2">
                        <p className="text-sm">Your Text Label</p>
                    </div>
                </div>
            </div>
        </div>
        : whichelement === 'Collections' ?
        <div className='w-full mt-6 flex pr-10 absolute'>
            <div className='flex px-10 py-4 gap-20 lesssizetext'>
                <div className='flex flex-col gap-1.5 hover:cursor-pointer'>
                    <p className='font-bold text-xs mb-1 hover:underline'>Collections</p>
                    <p className='hover:underline'>Summer</p>
                    <p className='hover:underline'>Winter</p>
                    <p className='mb-4 hover:underline'>Vintage</p>
                </div>
            </div>
            <div className='flex gap-2 ml-auto'>
                <div className="relative">
                    <img
                        src="/imageinshop.jpg" // Replace with your image URL
                        alt="man of 180/270"
                    />
                    <div className="absolute bottom-8 left-0 right-0 text-center text-red-400 py-2">
                        <p className="text-sm">Your Text Label</p>
                    </div>
                </div>
                <div className="relative">
                    <img
                        src="/imageinshop.jpg" // Replace with your image URL
                        alt="man of 180/270"
                    />
                    <div className="absolute bottom-8 left-0 right-0 text-center text-red-400 py-2">
                        <p className="text-sm">Your Text Label</p>
                    </div>
                </div>
                <div className="relative">
                    <img
                        src="/imageinshop.jpg" // Replace with your image URL
                        alt="man of 180/270"
                    />
                    <div className="absolute bottom-8 left-0 right-0 text-center text-red-400 py-2">
                        <p className="text-sm">Your Text Label</p>
                    </div>
                </div>
            </div>
        </div> 
        :
        <div className='w-auto mt-6 flex justify-between pr-10 absolute'>
            <div className='flex px-10 py-4 gap-20 lesssizetext'>
                <div className='flex flex-col gap-1.5 hover:cursor-pointer'>
                    <p className='font-bold text-xs mb-1 hover:underline'>ABOUT US</p>
                    <p className='hover:underline'>How it works</p>
                    <p className='hover:underline'>What we do</p>
                    <p className='mb-4 hover:underline'>Ethically produced</p>
                </div>
                <div className='flex flex-col gap-1.5 hover:cursor-pointer'>
                    <p className='font-bold text-xs hover:underline'>CUSTOMER SERVICE</p>
                    <p className='hover:underline'>Track your order</p>
                    <p className='hover:underline'>Contact us</p>
                    <p className='hover:underline'>FAQs</p>
                    <p className='hover:underline'>Free remake guarantte</p>
                </div>
            </div>
            <div className='flex gap-2'>
                <div className="relative">
                    <img
                        src="/imageinshop.jpg" // Replace with your image URL
                        alt="man of 180/270"
                    />
                    <div className="absolute bottom-8 left-0 right-0 text-center text-red-400 py-2">
                        <p className="text-sm">Your Text Label</p>
                    </div>
                </div>
                <div className="relative">
                    <img
                        src="/imageinshop.jpg" // Replace with your image URL
                        alt="man of 180/270"
                    />
                    <div className="absolute bottom-8 left-0 right-0 text-center text-red-400 py-2">
                        <p className="text-sm">Your Text Label</p>
                    </div>
                </div>
                <div className="relative">
                    <img
                        src="/imageinshop.jpg" // Replace with your image URL
                        alt="man of 180/270"
                    />
                    <div className="absolute bottom-8 left-0 right-0 text-center text-red-400 py-2">
                        <p className="text-sm">Your Text Label</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
