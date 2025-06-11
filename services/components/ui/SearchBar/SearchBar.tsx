import { useState, useEffect, useRef } from "react";
import { Button } from "../Button/Button";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
}

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [error, setError] = useState("");
  const searchRef = useRef<HTMLDivElement>(null);

  // Handle clicks outside of search results to close them
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Debounced search function
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setShowResults(false);
      return;
    }

    const debounceTimeout = setTimeout(() => {
      searchProducts(query);
    }, 300);

    return () => clearTimeout(debounceTimeout);
  }, [query]);

  const searchProducts = async (searchQuery: string) => {
    try {
      setIsLoading(true);
      setError("");
      
      const response = await fetch("https://fakestoreapi.com/products");
      
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      
      const products: Product[] = await response.json();
      
      // Filter products based on search query
      const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      setResults(filteredProducts);
      setShowResults(true);
    } catch (err) {
      setError("Error fetching products. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div ref={searchRef} className="w-full relative">
      <div className="relative">
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.trim() && setShowResults(true)}
          className="w-full px-4 py-3 border-2 border-[#3B6790] rounded-md pl-10 focus:outline-none focus:ring-2 focus:ring-[#EFB036] bg-[#F5EEDC] text-[#23486A] placeholder-[#3B6790] placeholder-opacity-80"
        />
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#3B6790]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        {query && (
          <Button
            onClick={() => setQuery("")}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-[#3B6790] hover:bg-[#23486A] text-[#F5EEDC] p-1 rounded-full transition-colors duration-200"
            aria-label="Clear search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Button>
        )}
      </div>

      {/* Search Results Dropdown - Redesigned */}
      {showResults && (
        <div className="absolute z-50 mt-2 w-full bg-[#F5EEDC] rounded-lg shadow-xl max-h-96 overflow-y-auto border-2 border-[#4C7B8B]">
          {isLoading ? (
            <div className="p-6 text-center text-[#3B6790]">
              <div className="animate-spin w-8 h-8 border-3 border-[#EFB036] border-t-transparent rounded-full mx-auto mb-3"></div>
              <p className="font-medium">Loading results...</p>
            </div>
          ) : error ? (
            <div className="p-4 text-center text-[#23486A] bg-red-100 rounded-md m-2">{error}</div>
          ) : results.length === 0 ? (
            <div className="p-6 text-center text-[#3B6790] font-medium">No products found</div>
          ) : (
            <ul className="py-2">
              {results.map((product) => (
                <li key={product.id} className="border-b border-[#4C7B8B] border-opacity-20 last:border-b-0 m-2 rounded-md overflow-hidden">
                  <Button
                    onClick={() => {
                      // Handle product selection (e.g., navigate to product page)
                      console.log("Selected product:", product);
                      setShowResults(false);
                    }}
                    className="w-full text-left p-4 hover:bg-[#4C7B8B] hover:bg-opacity-15 flex items-center space-x-4 transition-colors duration-200 rounded-md"
                  >
                    <div className="w-14 h-14 flex-shrink-0 bg-white p-1 rounded-md border border-[#4C7B8B] border-opacity-30">
                      {/* Product image placeholder */}
                      <div className="w-full h-full bg-[#23486A] bg-opacity-5 flex items-center justify-center rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#3B6790" className="w-8 h-8">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-grow min-w-0">
                      <p className="text-[#23486A] font-semibold truncate text-lg">{product.title}</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-[#EFB036] font-bold text-lg">${product.price.toFixed(2)}</span>
                        <span className="text-xs bg-[#3B6790] text-[#F5EEDC] px-3 py-1 rounded-full font-medium">
                          {product.category}
                        </span>
                      </div>
                    </div>
                  </Button>
                </li>
              ))}
            </ul>
          )}
          <div className="px-3 py-3 bg-[#23486A] border-t border-[#4C7B8B]">
            <Button 
              onClick={() => setShowResults(false)}
              className="w-full py-2 text-center text-[#F5EEDC] bg-[#EFB036] hover:bg-[#d99b26] font-medium transition-colors duration-200 rounded-md text-lg"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}