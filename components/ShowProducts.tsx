import { getProducts } from "@/app/actions/products-actions";
import ProductCard from "./ProductCard";

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function ShowProducts() {
  const products = await getProducts();

  return (
    <>
      {products.data.map((product: any) => (
        <ProductCard
          id={product.id}
          key={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
          imgUrl={product.image}
        />
      ))}
    </>
  );
}
