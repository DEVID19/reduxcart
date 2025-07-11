import React, { useState } from "react";
import products from "../data/products"; // your 200 products
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsperpage = 24;

  const totalPages = Math.ceil(products.length / productsperpage);

  const indexOfLastProduct = currentPage * productsperpage;
  const indexOfFirstProduct = indexOfLastProduct - productsperpage;

  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div>
        <h1 className="text-3xl font-bold mb-6 text-center ">All Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="flex justify-center mt-8 gap-2 ">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          >
            prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button key={page} onClick={() => setCurrentPage(page)}>
              {page}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
