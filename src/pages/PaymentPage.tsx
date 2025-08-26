import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const PAYSTACK_PUBLIC_KEY = "pk_test_f8b11d0bafc9c306e15ae2f83eb08b8a4638b475";

const PaymentPage: React.FC = () => {
  const { cart, clearCart } = useCart();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const totalAmount = cart.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0);

  const handlePay = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || cart.length === 0) return;
    setLoading(true);
    // For demo: use the first product in cart
    const productId = cart[0].id;
    try {
      // Call backend to initialize payment
  const res = await fetch("http://localhost:3000/products/paystack/init", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, productId })
      });
      const data = await res.json();
      if (data?.data?.authorization_url) {
        window.location.href = data.data.authorization_url;
      } else {
        alert("Payment initialization failed.");
      }
    } catch (err) {
      alert("Error initializing payment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <form onSubmit={handlePay}>
        <label className="block mb-2 font-semibold">Email for receipt:</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="w-full border px-3 py-2 rounded mb-4"
        />
        <div className="mb-4 font-bold text-lg">
          Total Amount: <span className="text-green-600">₦{totalAmount.toLocaleString()}</span>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 text-white py-2 rounded font-bold hover:bg-green-700"
        >
          {loading ? "Processing..." : "Pay with Paystack"}
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;
