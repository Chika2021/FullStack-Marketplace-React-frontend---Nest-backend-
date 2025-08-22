import React from 'react'
import HeroSection from '../component/HeroSection'
import { useProducts } from '../services/HomeService'



const Home: React.FC = () => {
  const { products, loading, error } = useProducts();
  if (loading) {
    return <div className="text-center mt-10">Loading products...</div>
  }
  if (error) {
    return <div className="text-center mt-10 text-red-500">{error}</div>;
  }
  return (
    <div>
      <HeroSection />

      {/* Hero Banner */}
      <div className="relative h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="Fashion Sale"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="text-center text-white px-4 animate-fadeInUp">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">SUMMER SALE</h1>
            <p className="text-xl mb-6">Up to 50% off on selected items</p>
            <button className="bg-primary hover:bg-red-500 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
      {/* Coupon Section */}
      <div
        className="coupon-section bg-white p-10 text-center mx-5 my-8 rounded-xl shadow-lg animate-fadeInUp"
        style={{ animationDelay: "0.3s" }}
      >
        <h2 className="text-3xl font-bold mb-4">10% OFF Discount</h2>
        <div className="coupon-box bg-gradient-to-br from-gray-50 to-gray-200 p-6 rounded-lg inline-block my-5 relative overflow-hidden transition-transform duration-300 hover:-translate-y-1 shadow-md">
          <p className="text-lg font-medium">
            Use code: <span className="font-bold text-primary">SALE10</span>
          </p>
          <p className="text-gray-600 mt-2">Valid until December 31, 2025</p>
        </div>
        <p className="text-lg mb-6">Subscribe to get 10% OFF on all purchases</p>
        <div className="email-subscribe flex justify-center mt-5">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-5 py-3 border border-gray-300 rounded-l-full w-80 focus:outline-none focus:border-primary transition-colors duration-300"
          />
          <button className="bg-primary text-white px-6 py-3 rounded-r-full font-medium hover:bg-red-500 transition-colors duration-300">
            EMAIL ME
          </button>
        </div>
      </div>

      <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Shop for the Latest Products</title>
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Product List */}
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <p className="text-lg font-bold text-blue-600">${product.price}</p>
                  <a
                    href="#"
                    className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            ))}
            </div>
          </div>
        </section>
      </>




    </div>


  )
}

export default Home