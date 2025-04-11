import ProductDetail from "@/components/productComp/ProductDetail";

export default function ProductPage({ params }) {
  return <ProductDetail id={params.id} />;
}