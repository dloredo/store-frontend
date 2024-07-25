"use client";

import { useCart } from "@/hooks/useCart";
import Image from "next/image";
import { useState } from "react";
import ImageSkeleton from "./ImageSkeleton";

export default function ProductCard({
  id,
  name,
  description,
  price,
  imgUrl,
}: {
  id: number;
  name: string;
  description: string;
  price: number;
  imgUrl: string;
}) {
  const { addToCart } = useCart();
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoaded = () => {
    setImageLoaded(true);
  };

  const handleAddToCart = () => {
    addToCart({ id, name, description, price, imgUrl, quantity: 1 });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-50">
        {!imageLoaded && <ImageSkeleton />}
        <Image
          src={`http://127.0.0.1:8000/api/storage/${imgUrl}`}
          alt={name}
          width={413}
          height={320}
          priority
          onLoad={handleImageLoaded}
          style={imageLoaded ? {} : { visibility: "hidden" }}
        />
      </div>
      <div className="p-4">
        <h3 className="text-2xl font-semibold mb-2 text-gray-900">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-gray-800 font-bold text-xl">${price}</span>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
            onClick={handleAddToCart}
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
}
