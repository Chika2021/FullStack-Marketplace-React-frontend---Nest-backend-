import React from "react";
import { useCart } from "../context/CartContext";

function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  if (cart.length === 0) {
    return <p className="text-center mt-10 text-gray-600">Your cart is empty.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cart.map((item) => (
        <div key={item.id} className="flex justify-between items-center border-b py-2">
          <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover rounded" />
          <p>{item.name}</p>
          <p>${item.price} x {item.quantity}</p>
          <button
            onClick={() => removeFromCart(item.id)}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Remove
          </button>
        </div>
      ))}
      <div className="mt-4 flex justify-between font-bold">
        <span>Total:</span>
        <span>
          $
          {cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
        </span>
      </div>
      <div className="flex gap-4 mt-4">
        <button
          onClick={clearCart}
          className="bg-gray-900 text-white px-4 py-2 rounded"
        >
          Clear Cart
        </button>
        <a
          href="/payment"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-bold text-center"
          style={{ display: 'inline-block' }}
        >
          Proceed to Checkout
        </a>
      </div>
    </div>
  );
}

export default CartPage;
