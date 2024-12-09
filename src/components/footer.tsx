import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Github, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      {/* Newsletter Section */}
      <div className="bg-black text-white px-4 py-12">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-3xl md:text-4xl font-bold max-w-md">
            STAY UP TO DATE ABOUT OUR LATEST OFFERS
          </h2>
          <div className="flex-col sm:flex-row gap-2 w-full md:w-auto">
          <div className="flex flex-col gap-2">
  {/* Input Field */}
  <Input
    type="email"
    placeholder="Enter your email address"
    className="bg-white text-black rounded-full px-6 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
  />
  
  {/* Button */}
  <Button
    variant="secondary"
    className="whitespace-nowrap bg-white text-black rounded-full px-6 py-3 shadow-md hover:bg-gray-200 transition-all duration-300"
  >
    Subscribe to Newsletter
  </Button>
</div>

          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto max-w-6xl px-4 py-12">
  <div className="grid grid-cols-1 md:grid-cols-6 gap-50">
    
    {/* Brand Section */}
    <div className="md:col-span-2">
      <h2 className="text-2xl font-bold mb-4">SHOP.CO</h2>
      <p className="text-gray-600 mb-6">
        We have clothes that suits your style and which you're proud to wear. From women to men.
      </p>
      <div className="flex gap-4">
        <a href="#" className="hover:opacity-80">
          <Twitter className="w-6 h-6" />
        </a>
        <a href="#" className="hover:opacity-80">
          <Facebook className="w-6 h-6" />
        </a>
        <a href="#" className="hover:opacity-80">
          <Instagram className="w-6 h-6" />
        </a>
        <a href="#" className="hover:opacity-80">
          <Github className="w-6 h-6" />
        </a>
      </div>
    </div>

    {/* Company Links */}
    <div>
      <h3 className="font-bold mb-4">COMPANY</h3>
      <ul className="space-y-3">
        <li><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
        <li><a href="#" className="text-gray-600 hover:text-gray-900">Features</a></li>
        <li><a href="#" className="text-gray-600 hover:text-gray-900">Works</a></li>
        <li><a href="#" className="text-gray-600 hover:text-gray-900">Career</a></li>
      </ul>
    </div>

    {/* Help Links */}
    <div>
      <h3 className="font-bold mb-4">HELP</h3>
      <ul className="space-y-3">
        <li><a href="#" className="text-gray-600 hover:text-gray-900">Customer Support</a></li>
        <li><a href="#" className="text-gray-600 hover:text-gray-900">Delivery Details</a></li>
        <li><a href="#" className="text-gray-600 hover:text-gray-900">Terms & Conditions</a></li>
        <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
      </ul>
    </div>

    {/* FAQ Links */}
    <div>
      <h3 className="font-bold mb-4">FAQ</h3>
      <ul className="space-y-3">
        <li><a href="#" className="text-gray-600 hover:text-gray-900">Account</a></li>
        <li><a href="#" className="text-gray-600 hover:text-gray-900">Manage Deliveries</a></li>
        <li><a href="#" className="text-gray-600 hover:text-gray-900">Orders</a></li>
        <li><a href="#" className="text-gray-600 hover:text-gray-900">Payments</a></li>
      </ul>
    </div>

    {/* Resources Links in a Single Column on Small Screens */}
    <div className="md:col-span-1">
      <h3 className="font-bold mb-4">RESOURCES</h3>
      <ul className="space-y-3">
        <li><a href="#" className="text-gray-600 hover:text-gray-900">Free eBooks</a></li>
        <li><a href="#" className="text-gray-600 hover:text-gray-900">Development Tutorial</a></li>
        <li><a href="#" className="text-gray-600 hover:text-gray-900">How to - Blog</a></li>
        <li><a href="#" className="text-gray-600 hover:text-gray-900">Youtube Playlist</a></li>
      </ul>
    </div>
    
  </div>
</div>


      {/* Bottom Footer */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto max-w-6xl px-4 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            Shop.co © 2000-2023. All Rights Reserved
          </p>
          <div className="flex gap-4">
  <img src="/images/visa.png" alt="Visa" className="h-[40px] w-[50px]" />
  <img src="/images/circle.png" alt="Mastercard" className="h-[40px] w-[50px]" />
  <img src="/images/paypal.png" alt="PayPal" className="h-[40px] w-[50px]" />
  <img src="/images/pay.png" alt="Apple Pay" className="h-[40px] w-[50px]" />
  <img src="/images/g pay.png" alt="Google Pay" className="h-[40px] w-[50px]" />
</div>

        </div>
      </div>
    </footer>
  )
}

