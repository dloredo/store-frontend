import type { Metadata } from "next";
import Container from "@/components/Container";
import { Suspense } from "react";
import { SkeletonCard } from "@/components/SkeletonCard";
import ShowProducts from "@/components/ShowProducts";

export const metadata: Metadata = {
  title: "Inicio - Mi Tienda Online",
  description:
    "La mejor tienda online de México. Compra en línea y recibe en tu hogar.",
};

export default async function Home() {
  return (
    <Container>
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Productos Destacados
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <Suspense fallback={<SkeletonLoading />}>
          <ShowProducts />
        </Suspense>
      </div>
    </Container>
  );
}

function SkeletonLoading() {
  return (
    <>
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </>
  );
}
