"use server";

import { revalidatePath } from "next/cache";

export async function getProducts() {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Error al obtener los productos");
    }

    const products = await response.json();

    return products.payload;
  } catch (error) {
    console.error("Error getting products:", error);
  }
}

export async function createProduct(FormData: FormData) {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/products", {
      method: "POST",
      body: FormData,
    });

    if (!response.ok) {
      throw new Error("Error al crear el producto");
    }

    revalidatePath("/");
  } catch (error) {
    console.error("Error creating product:", error);
  }
}
