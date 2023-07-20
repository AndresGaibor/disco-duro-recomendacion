import ProductCard, { Product } from "./ProductCard";

const ProductList = ({ productos }: { productos: Product[] }) => {
  console.log("ProductoList", productos);
  if (!productos) {
    return null;
  }
  if (!Array.isArray(productos)) {
    console.error("La variable productos no es un array válido");
    return null;
  }

  if (productos.length === 0) return null;

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4">Productos</h1>
      <div className="flex flex-wrap">
        {productos.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
