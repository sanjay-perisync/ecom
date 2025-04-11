'use client';

import { useEffect, useState } from 'react';
import ProductCard from '@/components/productComp/ProductCard';
import ProductCardSkeleton from '@/components/productComp/ProductCardSkeleton';
import { fetchAllProducts } from '@/api-config/get';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProducts() {
      try {
        const data = await fetchAllProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    }

    getProducts();
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <main className="mx-auto max-w-7xl">
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {loading
            ? Array.from({ length: 20 }).map((_, i) => <ProductCardSkeleton key={i} />)
            : products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
        </div>
      </main>
    </div>
  );
}
