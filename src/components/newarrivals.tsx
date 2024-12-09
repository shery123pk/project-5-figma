
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from "next/image";

export default function NewArrivals() {
  const products = [
    {
      id: 1,
      name: "T-Shirt",
      image: "/images/start.png",
      rating: 4.5,
      price: 120,
      oldPrice: 150,
      discount: 20,
    },
    {
      id: 2,
      name: "Jeans",
      image: "/images/1.png",
      rating: 3.5,
      price: 90,
      oldPrice: 110,
      discount: 15,
    },
    {
      id: 3,
      name: "Shirt",
      image: "/images/2.png",
      rating: 4.0,
      price: 140,
      oldPrice: 160,
      discount: 10,
    },
    {
      id: 4,
      name: "Jacket",
      image: "/images/3.png",
      rating: 5.0,
      price: 200,
      oldPrice: 250,
      discount: 20,
    },
  ];

  return (
    <section className="py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">New Arrivals</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="text-center bg-white shadow-md p-4 rounded-md">
            {/* Product Image */}
            <Image
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md"
            />

            {/* Product Name */}
            <h3 className="mt-4 text-gray-800 font-semibold">{product.name}</h3>

            {/* Rating */}
            <div className="flex justify-center items-center mt-2">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    className={`h-5 w-5 ${
                      i < product.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              <span className="text-sm text-gray-600 ml-2">{product.rating}/5</span>
            </div>

            {/* Pricing */}
            <div className="flex justify-center items-center space-x-2 mt-4">
              <span className="text-lg font-bold text-gray-800">${product.price}</span>
              {product.oldPrice && (
                <span className="text-sm line-through text-gray-500">
                  ${product.oldPrice}
                </span>
              )}
              {product.discount && (
                <span className="text-sm font-semibold text-red-500">
                  -{product.discount}%
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}