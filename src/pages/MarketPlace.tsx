import React from 'react'
import HeroSection from '../component/HeroSection'
import { useProducts } from '../services/HomeService'


const MarketPlace: React.FC = () => {

  const { products, loading, error } = useProducts()

  if (loading) {
    return <div className="text-center mt-10">Loading products...</div>
  }
  if (error) {
    return <div className="text-center mt-10 text-red-500">{error}</div>;
  }
  return (
    <div>
      <HeroSection />

      <div style={{ marginBottom: '50px' }}>
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12 px-6">

          
          
          
          {/* Card 1 */}
          { products.map((product) => (
          <div className="min-h-32 max-w-[250px] dark:bg-gray-900 dark:text-gray-100 border dark:border-0 mx-auto relative rounded-md hover:shadow-xl cursor-pointer duration-200">
            <span className="bg-blue-600 text-white px-2 py-1 absolute top-0 right-0 text-xs md:text-sm rounded-bl-md">
              5.5 % discount
            </span>
            <div className="overflow-hidden p-2 rounded-md">
              <img
                alt="Iphone 14+"
                loading="lazy"
                src= {product.imageUrl}
                className="rounded-md"
              />
            </div>
            <div className="px-2 py-3">
              <h5 className="text-base font-semibold text-center">{product.name}</h5>
              <p className="text-center text-xs font-semibold flex justify-center gap-2 my-2">
                <del className="text-gray-500">${product.price}</del>
                <span>${product.price}</span>
              </p>
              <div className="text-xs flex justify-between flex-wrap mt-1">
                <button className="flex items-center px-2 py-1 gap-x-2 bg-blue-600 border-2 border-blue-600 hover:bg-transparent rounded text-white hover:text-inherit">
                  Add to cart
                </button>
                <button className="flex items-center px-2 py-1 gap-x-2 bg-blue-600 border-2 border-blue-600 hover:bg-transparent rounded text-white hover:text-inherit">
                  View
                </button>
              </div>
            </div>
          </div>
          )
        )}






         

        </div>
      </div>


    </div>
  )
}

export default MarketPlace
