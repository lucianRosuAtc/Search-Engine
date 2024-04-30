export default function Loading() {
  return (
    <div>
      <ul className="pu-4 divide-y divide-gray-200 bg-white shadow-md rounded-b-md">
        {new Array(3).fill(null).map((_, i) => (
          <li
            key={i}
            className="flex mx-auto px-8 py-4 w-full space-x-4 animate-pulse"
          >
            <div className="rounded-lg bg-gray-400 h-40 w-40" />
            <div className="w-full flex-1 py-1 space-y-4">
                <div className="h-10 bg-gray-300 rounded w-full" />
                <div className="space-y-2">
                    <div className="h-4 bg-gray-300 rounded w-4/5" />
                    <div className="h-4 bg-gray-300 rounded w-4/5" />
                    <div className="h-4 bg-gray-300 rounded w-4/5" />
                </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

// MARK: loading animation for search results