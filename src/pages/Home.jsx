import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Search } from "lucide-react";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuerry, setSearchQuerry] = useState("");
  const productsperpage = 24;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products?limit=100");
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Failed to fetch the products:", error);
      }
    };
    fetchProducts();
  }, []);

  const totalPages = Math.ceil(products.length / productsperpage);

  const indexOfLastProduct = currentPage * productsperpage;
  const indexOfFirstProduct = indexOfLastProduct - productsperpage;

  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const SearchProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchQuerry.trim().toLowerCase()) ||
      product.description
        .toLowerCase()
        .includes(searchQuerry.trim().toLowerCase())
  );
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div>
        <div className="flex items-center justify-center flex-col  gap-4 mb-6">
          <h1 className="text-3xl font-bold  text-center ">All Products</h1>
          <div className="flex max-w-md mx-auto mb-6 overflow-hidden border rounded-full shadow-sm">
            <input
              type="text"
              value={searchQuerry}
              onChange={(e) => setSearchQuerry(e.target.value)}
              placeholder="Search the products"
              className="flex-grow px-4 py-2 focus:outline-none"
            />
            <button
              onClick={() => console.log("Searching:", searchQuerry)}
              className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 rounded-r-full flex items-center gap-2 cursor-pointer"
            >
              <Search size={18} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {searchQuerry ? (
            SearchProducts.length > 0 ? (
              SearchProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p className="text-center col-span-full text-red-600 font-semibold">
                No results found for "{searchQuerry}"
              </p>
            )
          ) : (
            currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>

        {!searchQuerry && (
          <div className="flex justify-center mt-8 gap-2 ">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 border rounded disabled:opacity-50 cursor-pointer"
            >
              prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 border rounded ${
                  page === currentPage ? "bg-blue-600 text-white" : "bg-white"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-3 py-1 border rounded disabled:opacity-50 cursor-pointer"
            >
              next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
