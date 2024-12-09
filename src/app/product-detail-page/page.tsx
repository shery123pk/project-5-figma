import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Search, ShoppingCart, User } from 'lucide-react'
import Cards from "@/components/cards"



export default function Product() {
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
        <h1 className="text-[30px] font-bold"><a href="/">SHOP.CO</a>
          </h1>
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
          <ShoppingCart className="h-6 w-6" />
          <User className="h-6 w-6" />
        </div>
      </header>

      
<div>
  <div className="container mx-auto px-4 py-8">
<img src="/product-images/image 1.png" alt="" />
  </div>
  <div className="container mx-auto px-4 py-8">
<img src="/product-images/image 1.png" alt="" />
  </div>
  

</div>

<div className="flex items-center  ">
<div className=" container mx-auto px-4 bg-gray-50 rounded-3xl ">
        
<div className="flex justify-between items-center mx-auto px-[130px] pt-10">

  {/* Left Section */}
  <h3 className="text-[24px] font-semibold text-left">
    All Reviews <span className="text-gray-500 text-[10px]">(451)</span>
  </h3>
  
  {/* Right Section */}
  <div className="flex space-x-2">
    <img src="/product-images/Frame 19.png" alt="Image 1" className="h-[40px] w-[50px] rounded-full" />
    <img src="/product-images/Frame 18.png" alt="Image 2" className="h-[40px] w-[100px]" />
    <img src="/product-images/Frame 20.png" alt="Image 3" className="h-[40px] w-[110px]" />
  </div>
</div>
        
        <Cards/>
        <Cards/>
       
       
        
        
            </div>
            
          
        </div>

        {/* Top-selling */}

        <section className="container mx-auto px-4 ">
  <h3 className="text-[48px] font-bold text-center mb-8">YOU MIGHT ALSO LIKE</h3>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {[
      { id: 1, image: "/product-images/1.png", title: "Polo with Contrast Trims", price: 212, discount: 242 },
      { id: 2, image: "/product-images/2.png", title: "Gradient Graphic T-shirt", price: 145 },
      { id: 3, image: "/product-images/3.png", title: "Polo with Tipping Details", price: 180 },
      { id: 4, image: "/product-images/4.png", title: "Black Striped T-shirt", price: 120, discount: 150 },
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
            <span className="text-red-500 text-sm bg-red-50 px-2 py-1 rounded-full">-30%</span>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
  <div className="text-center mt-8">
    
  </div>
</section>








    </div>
  )
}

