"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { useCart } from "@/hooks/useCart";
import { ShoppingCart } from "lucide-react";

export default function Header({ title }: { title: string }) {
  const { cart } = useCart();
  const cartItemCount = cart.reduce(
    (count: number, product: any) => count + product.quantity,
    0
  );

  return (
    <header className="py-8 bg-white w-full shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">
          <Link href="/">{title}</Link>
        </h1>
        <div className="flex items-center space-x-4">
          <Button>
            a<Link href="/create-product">Agregar producto</Link>
          </Button>
          <div className="relative">
            <Link href="/cart">
              <Button>
                <ShoppingCart className="h-6 w-6 " />
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                  {cartItemCount}
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
