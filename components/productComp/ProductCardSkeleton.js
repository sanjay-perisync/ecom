export default function ProductCardSkeleton() {
    return (
      <div className="border border-gray-300 p-4 rounded shadow bg-white animate-pulse">
        <div className="bg-gray-300 h-40 w-full rounded" />
        <div className="h-4 bg-gray-300 rounded mt-4 w-3/4" />
        
        <div className="flex justify-between items-center pt-5">
          <div className="h-4 bg-gray-300 rounded w-16" />
          <div className="h-4 bg-gray-300 rounded w-24" />
        </div>
      </div>
    );
  }
  