import Container from "@/components/Container";
import { FormCreateProduct } from "@/components/FormCreateProduct";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agregar producto - Mi Tienda Online",
  description: "Agrega un nuevo producto a tu tienda en línea.",
};

export default function CreatePage() {
  return (
    <Container>
      <h2 className="text-3xl font-bold text-gray-800 mb-8">
        Agregar producto
      </h2>
      <FormCreateProduct />
    </Container>
  );
}
