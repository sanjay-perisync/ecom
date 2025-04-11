import Link from 'next/link';

export default function ProductCard({ product }) {
  const { id, title, image, price, rating } = product;
  const { rate, count } = rating;

  return (
    <Link
      href={`/products/${id}`}
      className="border-2 border-green-900 rounded-xl  hover:shadow-md transition-all duration-300 bg-white hover:scale-[1.02] group"
    >
      <div className="p-4 flex flex-col justify-between h-full">

        <div>
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-40 w-full object-contain mx-auto transition-transform duration-300 group-hover:scale-105"
        />

        <h2 className="mt-3 font-semibold text-base text-gray-800 group-hover:underline line-clamp-2">
          {title}
        </h2>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="text-green-700 font-semibold text-lg">
            ${price.toFixed(2)}
          </div>
          <div className="text-yellow-600 flex items-center gap-1 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 64 64"
            >
              <path
                fill="#ffce31"
                d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2z"
              />
            </svg>
            <span>
              {rate} ({count})
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
