import React from 'react'

export default function Newsletter() {
  return (
    <div className="flex flex-col justify-center items-center py-32 bg-gray-100">
        <p className="text-3xl text-gray-500 py-4">Receive $50 Off* Your First Order</p>
        <p className="text-xm text-gray-500 pb-12">Subscribe to out newsletter</p>
        <form action="#" method="POST">
            <div className="mb-4 flex">
              <input type="email" id="email" name="email" className="px-4 py-2" style={{width: "600px"}} placeholder="Enter your Email" required></input>
              <button type="submit" className="bg-black hover:text-red-500 text-white py-2 px-4 focus:outline-none focus:shadow-outline">Subscribe</button>
            </div>
        </form>
        <p className="perfectfit pt-2 text-gray-400">By subscribing you agree to our <span>Privacy Policy</span> *T&C Apply.</p>   
        <p className="perfectfit pt-2 text-gray-400" >Min spend $200. One per customer. New signups only</p>   
    </div>
  )
}
