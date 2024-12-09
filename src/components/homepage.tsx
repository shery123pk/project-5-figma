import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Search, ShoppingCart, User } from 'lucide-react'
import TestimonialCard from "./cards"
import Cards from "./cards"
import Link from "next/link"

export default function Homepage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner */}
      <div className="w-full bg-black py-2">
        <p className="text-center text-white text-sm">
          Sign up and get 20% off to your first order.{" "}
          <span className="underline cursor-pointer">Sign Up Now</span>
        </p>
      </div>

      {/* Header */}
      <header className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-[30px] font-bold">SHOP.CO</h1>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-sm">Shop</a>
          <a href="#" className="text-sm">On Sale</a>
          <a href="#" className="text-sm">New Arrivals</a>
          <a href="#" className="text-sm">Brands</a>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:flex items-center">
            <Input 
              type="search" 
              placeholder="Search for products..." 
              className="pl-10 w-[600px] bg-gray-100 border-none rounded-full"
            />
            <Search className="absolute left-3 h-4 w-4 text-gray-400" />
          </div>
          <a href="/cart"><ShoppingCart className="h-6 w-6" /></a>
          <User className="h-6 w-6" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4  md:py-2">
        
        <div className="grid md:grid-cols-2 gap-8 items-center bg-[#F3F0F1] px-[100px]">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-6xl font-bold leading-tight bg-[#F3F0F1]">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="text-gray-600">
              Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
            </p>
          <Link href={"/product-detail-page"}>
          
          <Button size="lg" className="rounded-full px-8" >
              Shop Now
            </Button>
          </Link>
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <p className="text-3xl font-bold">200+</p>
                <p className="text-gray-600 text-sm">International Brands</p>
              </div>
              <div>
                <p className="text-3xl font-bold">2,000+</p>
                <p className="text-gray-600 text-sm">High-Quality Products</p>
              </div>
              <div>
                <p className="text-3xl font-bold">30,000+</p>
                <p className="text-gray-600 text-sm">Happy Customers</p>
              </div>
            </div>
          </div>
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] mt-10">
  <Image
    src="/images/Rectangle 2.png"
    alt="Fashion Models"
    fill
    className="object-cover rounded-lg"
  />
</div>

        </div>
      </section>

      {/* Brands */}
      <div className="w-full bg-black py-5 ">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {['VERSACE', 'ZARA', 'GUCCI', 'PRADA', 'Calvin Klein'].map((brand) => (
            <p key={brand} className="text-white text-[40px] font-bold">{brand}</p>
          ))}
        </div>
      </div>

      {/* New Arrivals */}
      <section className="container mx-auto px-4 py-16">
  <h3 className="text-[48px] font-bold text-center mb-8">NEW ARRIVALS</h3>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {[
      { id: 1, image: "/images/t-shirt.png", title: "T-SHIRT WITH TAPE DETAILS", price: 120, discount: 140 },
      { id: 2, image: "/images/image 8.png", title: "CLASSIC POLO TEE", price: 90, discount: 110 },
      { id: 3, image: "/images/Frame 34.png", title: "GRAPHIC PRINT TEE", price: 100, discount: 130 },
      { id: 4, image: "/images/Frame 38.png", title: "VINTAGE LOOK TEE", price: 80, discount: 100 },
    ].map((item) => (
      <Card key={item.id}>
        <CardContent className="p-4">
          <div className="relative h-[300px] mb-4">
            <Image
              src={item.image} // Use dynamic image source
              alt={item.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <h4 className="font-bold mb-2">{item.title}</h4>
          <div className="flex items-center mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-sm ml-2">4.5/5</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg">${item.price}</span>
            <span className="text-gray-400 line-through">${item.discount}</span>
            <span className="text-red-500 text-sm bg-red-50 px-2 py-1 rounded-full">-20%</span>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
  <div className="text-center mt-8">
    <Button variant="outline" className="rounded-full">
      View All
    </Button>
  </div>
</section>

        {/* Top-selling */}

        <section className="container mx-auto px-4 ">
  <h3 className="text-[48px] font-bold text-center mb-8">TOP SELLING</h3>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {[
      { id: 1, image: "/images/5.png", title: "T-SHIRT WITH TAPE DETAILS", price: 120, discount: 140 },
      { id: 2, image: "/images/4.png", title: "CLASSIC POLO TEE", price: 90, discount: 110 },
      { id: 3, image: "/images/3.png", title: "GRAPHIC PRINT TEE", price: 100, discount: 130 },
      { id: 4, image: "/images/2.png", title: "VINTAGE LOOK TEE", price: 80, discount: 100 },
    ].map((item) => (
      <Card key={item.id}>
        <CardContent className="p-4">
          <div className="relative h-[300px] mb-4">
            <Image
              src={item.image} // Use dynamic image source
              alt={item.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <h4 className="font-bold mb-2">{item.title}</h4>
          <div className="flex items-center mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-sm ml-2">4.5/5</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg">${item.price}</span>
            <span className="text-gray-400 line-through">${item.discount}</span>
            <span className="text-red-500 text-sm bg-red-50 px-2 py-1 rounded-full">-20%</span>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
  <div className="text-center mt-8">
    <Button variant="outline" className="rounded-full">
      View All
    </Button>
  </div>
</section>


      {/* Browse by Style */}
      <div className="p-4 bg-gray-100 w-full">
  {/* Large Heading */}
  <h1 className="text-[48px] font-bold text-center mb-8">BROWSE BY DRESS STYLE</h1>
  
  {/* Grid Layout */}
  <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 max-w-screen-xl mx-auto">

    {/* Casual */}
    <div className="col-span-1 flex flex-col items-center bg-white rounded-lg shadow-md p-4">
      <div className="flex flex-col justify-center items-center w-full">
        <img
          src="/browseBystyle/casual.png"
          alt="Casual Style"
          className="w-full h-30 object-cover rounded-md "
        />
        <h3 className="text-[30px] font-bold mt-2 text-center">Casual</h3>
      </div>
    </div>

    {/* Formal */}
    <div className="col-span-2 flex flex-col items-center bg-white rounded-lg shadow-md p-4">
      <div className="flex flex-col justify-center items-center w-full">
        <img
          src="/browseBystyle/2.png"
          alt="Formal Style"
          className="w-full h-30 object-cover rounded-md"
        />
        
      </div>
    </div>

    {/* Party */}
    <div className="col-span-2 flex flex-col items-center bg-white rounded-lg shadow-md p-4">
      <div className="flex flex-col justify-center items-center w-full">
        <img
          src="/browseBystyle/3.png"
          alt="Party Style"
          className="w-full h-64 object-cover rounded-md"
        />
       
      </div>
    </div>

    {/* Gym */}
    <div className="col-span-1 flex flex-col items-center bg-white rounded-lg shadow-md p-4">
      <div className="flex flex-col justify-center items-center w-full">
        <img
          src="/browseBystyle/1.png"
          alt="Gym Style"
          className="w-full h-15 object-cover rounded-md"
        />
      </div>
    </div>
  </div>
</div>



      {/* Our-happy customer */}

      <div className="container mx-auto px-4 bg-gray-50 rounded-3xl">
        <h3 className="text-3xl font-bold text-left pt-12 pl-[130px]">OUR HAPPY CUSTOMER</h3>
        <div className="flex justify-between gap-20">
              
        <Cards/>
        
            </div>
            
          
        </div>
      </div>






    // //   Newsletter
    //   {/* <section className="container mx-auto px-4 py-16">
    //     <div className="bg-black rounded-2xl p-12 text-white text-center">
    //       <h3 className="text-3xl font-bold mb-8">
    //         STAY UP TO DATE ABOUT OUR LATEST OFFERS
    //       </h3>
    //       <div className="max-w-md mx-auto space-y-4">
    //         <Input
    //           type="email"
    //           placeholder="Enter your email address"
    //           className="bg-white text-black"
    //         />
    //         <Button className="w-full bg-white text-black hover:bg-gray-100">
    //           Subscribe to Newsletter
    //         </Button>
    //       </div>
    //     </div>
    //   </section> */}
    // // </div>
  )
}

