import React, { useState } from "react";
import { useProductDetails } from "../services/ProductDetail";
import { useCart } from "../context/CartContext";

function ProductDetail() {
  const { product, loading, error } = useProductDetails();
  const { addToCart } = useCart();
  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = () => {
    if (!product) return;
    addToCart({
      id: Number(product.id),
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl,
      description: product.description
    });
    setShowToast(true);
    setTimeout(() => setShowToast(false), 1200);
  };

  if (loading) return <p>Loading.....</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!product) return <p>No product found</p>;

  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          {/* Product Image */}
          <div className="md:flex-1 px-4">
            <img
              className="w-full h-[460px] object-cover rounded-lg"
              src={product.imageUrl}
              alt={product.name}
            />
            <button
              onClick={handleAddToCart}
              className="w-full mt-4 bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-700"
            >
              Add to Cart
            </button>
      {showToast && (
        <div style={{
          position: 'fixed',
          top: 30,
          right: 30,
          background: '#10b981',
          color: '#fff',
          padding: '12px 24px',
          borderRadius: 8,
          fontWeight: 600,
          fontSize: 16,
          boxShadow: '0 2px 8px rgba(16,185,129,0.12)',
          zIndex: 2000,
          transition: 'opacity 0.3s',
        }}>
          Added to cart!
        </div>
      )}
          </div>

          {/* Product Info */}
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              {product.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              {product.description}
            </p>
            <div className="flex mb-4">
              <span className="font-bold text-gray-700">Price: </span>
              <span className="ml-2 text-gray-600">${product.price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
