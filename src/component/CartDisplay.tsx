import React from "react";
import { useCart } from "../context/CartContext";

const CartDisplay: React.FC = () => {
  const { cart, clearCart } = useCart();

  const totalPrice = cart.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0);

  return (
    <div style={{
      position: "fixed",
      top: 20,
      right: 20,
      background: "#fff",
      borderRadius: 12,
      boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
      border: "1px solid #e5e7eb",
      padding: 16,
      minWidth: 220,
      maxWidth: 260,
      maxHeight: 340,
      zIndex: 1000,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column"
    }}>
      <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16, color: '#0552f7ff', letterSpacing: 1 }}>🛒 Cart Items</h3>
      {cart.length === 0 ? (
        <div style={{ color: '#888', fontStyle: 'italic', textAlign: 'center' }}>No items in cart</div>
      ) : (
        <>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            overflowY: 'auto',
            maxHeight: 180,
            minHeight: 40,
            borderBottom: '1px solid #e5e7eb',
            marginBottom: 8
          }}>
            {cart.map((item) => (
              <li key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: 10, background: '#f3f4f6', borderRadius: 8, padding: '6px 8px' }}>
                <img src={item.imageUrl} alt={item.name} style={{ width: 28, height: 28, objectFit: 'cover', borderRadius: 6, marginRight: 8, border: '1px solid #ddd' }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, color: '#333', fontSize: 14 }}>{item.name}</div>
                  <div style={{ color: '#6b7280', fontSize: 12 }}>Qty: <span style={{ fontWeight: 500 }}>{item.quantity}</span></div>
                </div>
                <div style={{ fontWeight: 700, color: '#10b981', fontSize: 14 }}>${item.price}</div>
              </li>
            ))}
          </ul>
          <div style={{ fontWeight: 700, fontSize: 16, color: '#6366f1', margin: '8px 0 0 0', textAlign: 'right' }}>
            Total: <span style={{ color: '#10b981' }}>${totalPrice.toLocaleString()}</span>
          </div>
          <button
            onClick={clearCart}
            style={{
              marginTop: 16,
              width: '100%',
              padding: '10px 0',
              background: '#ef4444',
              color: '#fff',
              fontWeight: 600,
              border: 'none',
              borderRadius: 8,
              boxShadow: '0 2px 8px rgba(239,68,68,0.08)',
              cursor: 'pointer',
              fontSize: 16,
              transition: 'background 0.2s',
            }}
            onMouseOver={e => (e.currentTarget.style.background = '#dc2626')}
            onMouseOut={e => (e.currentTarget.style.background = '#ef4444')}
          >
            Empty Cart
          </button>
          <a
            href="/payment"
            style={{
              marginTop: 10,
              display: 'block',
              width: '100%',
              padding: '10px 0',
              background: '#6366f1',
              color: '#fff',
              fontWeight: 600,
              border: 'none',
              borderRadius: 8,
              boxShadow: '0 2px 8px rgba(99,102,241,0.08)',
              cursor: 'pointer',
              fontSize: 16,
              textAlign: 'center',
              textDecoration: 'none',
              transition: 'background 0.2s',
            }}
            onMouseOver={e => (e.currentTarget.style.background = '#4338ca')}
            onMouseOut={e => (e.currentTarget.style.background = '#6366f1')}
          >
            Proceed to Payment
          </a>
        </>
      )}
    </div>
  );
};

export default CartDisplay;
