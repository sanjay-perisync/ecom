'use client';

import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist } from '@/redux/slices/wishlistSlice';
import Link from 'next/link';
// import AddBtn from '../cart/AddBtn';

export default function WishlistPage() {
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  return (
    <div className="max-w-7xl mx-auto p-6">
      

      {wishlist.length === 0 ? (
        <div className='flex flex-col items-center justify-center mt-30'>
        <img src='https://shineternal.com/images/emptywishlist.png' alt='' className="w-40 md:w-64"/>
        <p className="text-gray-500 text-xl font-semibold"><i>Your wishlist is empty.</i></p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>
          {wishlist.map((product) => (
            <div
              key={product.id}
              className="border border-gray-200 p-4 rounded-xl flex flex-col justify-between hover:shadow-sm transition-all duration-300 bg-white hover:scale-[1.02] group"
            >
              <Link href={`/products/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-40 object-contain mx-auto mb-4"
                />
                <h2 className="font-semibold text-lg">{product.title}</h2>

                {/* <div className="w-full my-2">
                  <AddBtn product={product} />
                </div> */}
              </Link>

              <div className="flex justify-between items-center mt-4">
                <p className="text-green-700 font-semibold">${product.price}</p>
                <button
                  onClick={() => dispatch(removeFromWishlist(product.id))}
                  className="text-red-500 hover:underline font-semibold"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
