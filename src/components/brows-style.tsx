import Image from 'next/image'

const categories = [
  {
    name: "Casual",
    image: "/placeholder.svg?height=649&width=973",
    className: "col-span-1"
  },
  {
    name: "Formal",
    image: "/placeholder.svg?height=870&width=1306",
    className: "col-span-2"
  },
  {
    name: "Party",
    image: "/placeholder.svg?height=616&width=770",
    className: "col-span-2"
  },
  {
    name: "Gym",
    image: "/placeholder.svg?height=677&width=452",
    className: "col-span-1"
  }
]

export default function BrowseStyles() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16 bg-[#F0F0F0] rounded-[40px]">
      <h1 className="text-center font-bold text-4xl md:text-5xl mb-16">
        BROWSE BY DRESS STYLE
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {categories.map((category) => (
          <div
            key={category.name}
            className={`relative bg-white rounded-[20px] overflow-hidden h-[289px] ${category.className}`}
          >
            <div className="absolute top-6 left-6 z-10">
              <h2 className="text-3xl font-bold font-satoshi">
                {category.name}
              </h2>
            </div>
            
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={category.image}
                alt={`${category.name} style`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

