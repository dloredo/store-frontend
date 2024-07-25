"use client";

import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function CartPage() {
  const { cart, addToCart, removeFromCart } = useCart();

  const handleRemoveFromCart = (product: any) => {
    removeFromCart(product);
  };

  const handleAddToCart = (product: any) => {
    addToCart(product);
  };

  // Calcular el total general del carrito
  const total = cart.reduce((acc: number, product: any) => {
    return acc + product.price * product.quantity;
  }, 0);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Tu Carrito</h2>
      {cart.length === 0 ? (
        <p className="text-gray-600">
          Tu carrito está vacío.{" "}
          <Link href="/" className="underline text-gray-900 font-bold">
            Continúa comprando
          </Link>
          .
        </p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {cart.map((product: any) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative h-50">
                  <Image
                    src={`http://127.0.0.1:8000/api/storage/${product.imgUrl}`}
                    alt={product.name}
                    width={413}
                    height={320}
                    priority
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-800 font-bold text-xl">
                      ${product.price}
                    </span>
                    <span className="text-gray-600">x {product.quantity}</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-800 font-bold text-xl">
                      Subtotal: ${(product.price * product.quantity).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <Button
                      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
                      onClick={() => handleAddToCart(product)}
                    >
                      Agregar
                    </Button>
                    <Button
                      className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-300"
                      onClick={() => handleRemoveFromCart(product)}
                    >
                      Eliminar
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800">
              Total: ${total.toFixed(2)}
            </h3>
          </div>
        </>
      )}
    </div>
  );
}
