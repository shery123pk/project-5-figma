"use client"

import { Minus, Plus, Trash2, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import Link from 'next/link'





interface Product {
  id: number
  name: string
  size: string
  color: string
  price: number
  image: string
}

const products: Product[] = [
  {
    id: 1,
    name: "Gradient Graphic T-shirt",
    size: "Large",
    color: "White",
    price: 145,
    image: "/images/Frame 33.png",
  },
  {
    id: 2,
    name: "Checkered Shirt",
    size: "Medium",
    color: "Red",
    price: 180,
    image: "/images/Frame 34.png",
  },
  {
    id: 3,
    name: "Skinny Fit Jeans",
    size: "Large",
    color: "Blue",
    price: 240,
    image: "/images/image 8.png",
  },
]

export default function ShoppingCart() {
  return (
    <>
    <h3><Link href={'/'}></Link>Home / <Link href={'/cart'}>Cart</Link></h3>
    <h1 className='text-4xl font-bold mt-20'>YOUR CART</h1>
    <div className="flex flex-col lg:flex-row gap-6 mt-5">
      {/* Products List */}
      <Card className="flex-1 p-6 space-y-6">
        {products.map((product, index) => (
          <div key={product.id}>
            <div className="flex gap-4 items-center">
              <div className="h-[124px] w-[124px] bg-[#F0EEED] rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 space-y-1">
                <h3 className="font-bold text-xl">{product.name}</h3>
                <p className="text-sm text-gray-600">Size: {product.size}</p>
                <p className="text-sm text-gray-600">Color: {product.color}</p>
                <p className="font-bold text-2xl">${product.price}</p>
              </div>
              <div className="flex flex-col items-end gap-4">
                <Button variant="ghost" size="icon">
                  <Trash2 className="h-5 w-5 text-red-500" />
                </Button>
                <div className="flex items-center bg-gray-100 rounded-full">
                  <Button variant="ghost" size="icon" className="rounded-l-full">
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center">1</span>
                  <Button variant="ghost" size="icon" className="rounded-r-full">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            {index < products.length - 1 && <hr className="my-6 border-gray-200" />}
          </div>
        ))}
      </Card>

      {/* Order Summary */}
      <Card className="w-full lg:w-[505px] p-6 space-y-6">
        <h2 className="text-2xl font-bold">Order Summary</h2>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-bold">$565</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Discount (-20%)</span>
            <span className="font-bold text-red-500">-$113</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Delivery Fee</span>
            <span className="font-bold">$15</span>
          </div>
          <hr className="border-gray-200" />
          <div className="flex justify-between">
            <span>Total</span>
            <span className="text-2xl font-bold">$467</span>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="flex-1 flex items-center bg-gray-100 rounded-full px-4">
            <Input
              type="text"
              placeholder="Add promo code"
              className="border-0 bg-transparent focus-visible:ring-0"
            />
          </div>
          <Button className="rounded-full">Apply</Button>
        </div>
        <Button className="w-full h-[60px] rounded-full text-base" size="lg">
          Go to Checkout
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </Card>
    </div>
    </>
  )
}

