"use client";

import { useEffect, useState } from 'react';
import { fetchProductById } from '@/api-config/get';
import AddBtn from '@/components/cart/AddBtn';
import Link from 'next/link';
import CircularProgress from '@mui/material/CircularProgress';
import { FaCheck } from 'react-icons/fa';

import { useDispatch,useSelector } from 'react-redux';
import { addToWishlist } from '@/redux/slices/wishlistSlice';

export default function ProductDetail({ id }) {
  const [product, setProduct] = useState(null);
  // const [isWishlisted, setIsWishlisted] = useState(false);
  const wishlist = useSelector(state => state.wishlist);

  const isWishlisted = product ? wishlist.some(item => item.id === product.id) : false;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!id) return;

    async function getProduct() {
      try {
        const data = await fetchProductById(id);
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    }

    getProduct();
  }, [id]);

  const handleAddToWishlist = () => {
    if (!isWishlisted) {
      dispatch(addToWishlist(product));
    }
  };

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <CircularProgress color="success" size={60} thickness={5} />
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto p-6">
        <Link href="/" className="hover:text-blue-500 underline mb-4 inline-block">
          Back to Home
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-64 object-contain transition-transform duration-300 hover:scale-105"
          />
          <div>
            <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
            <p className="text-yellow-600 mb-4 flex gap-1 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 64 64">
                <path fill="#ffce31" d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2z" />
              </svg>
              <span>{product.rating?.rate} ({product.rating?.count} reviews)</span>
            </p>
            <p className="text-xl font-semibold text-gray-700 mb-2">${product.price}</p>
            <p className="text-gray-700 mb-4">{product.description}</p>

            <div className='flex gap-4'>
              <AddBtn product={product} />
              <button
      onClick={handleAddToWishlist}
      className={`flex items-center gap-2 border px-4 py-2 rounded-lg transition text-sm font-medium ${
        isWishlisted ? 'border-green-400 bg-green-50 text-green-700' : 'border-gray-300 hover:bg-gray-100'
      }`}
      disabled={isWishlisted}
    >
      {isWishlisted && <FaCheck className="text-green-600" />}
      {isWishlisted ? 'Added to wishlist' : 'Add to wishlist'}
    </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
