'use client';

import { useEffect, useState } from 'react';
import { fetchGroupedByCategory } from '@/api-config/get';
import ProductCard from '@/components/productComp/ProductCard';
import ProductCardSkeleton from '../productComp/ProductCardSkeleton';

export default function CategoriesPage() {
  const [grouped, setGrouped] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGroupedByCategory()
      .then((groupedData) => {
        setGrouped(groupedData);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching grouped products:', err);
        setLoading(false);
      });
  }, []);
  

  return (
    <div className="mx-auto max-w-7xl pt-8 px-4">
      <h1 className="text-2xl lg:text-3xl font-semibold mb-6">Product Categories</h1>

      {loading ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 20 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      ) : (
        Object.entries(grouped).map(([category, items]) => (
          <div key={category} className="mb-10">
            <h2 className="text-lg lg:text-2xl font-semibold mb-4 capitalize">{category}</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {items.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
