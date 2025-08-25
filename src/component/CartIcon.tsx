import React, { useState } from "react";
import CartDisplay from "./CartDisplay";

const CartIcon: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={{
          position: "fixed",
          top: 24,
          right: 24,
          background: "blue",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: 45,
          height: 45,
          boxShadow: "0 2px 8px rgba(109,40,217,0.12)",
          cursor: "pointer",
          zIndex: 1100,
          fontSize: 28,
          display: open ? "none" : "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
        aria-label="Open cart"
      >
        🛒
      </button>
      {open && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "rgba(0,0,0,0.2)", zIndex: 1200 }}>
          <div style={{ position: "fixed", top: 40, right: 40, zIndex: 1300 }}>
            <button
              onClick={() => setOpen(false)}
              style={{
                position: "absolute",
                top: -16,
                right: -16,
                background: "#ef4444",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: 24,
                height: 24,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                cursor: "pointer",
                fontSize: 14,
                boxShadow: "0 2px 8px rgba(239,68,68,0.12)",
                zIndex: 1400,
                transition: "background 0.2s",
              }}
              aria-label="Close cart"
              onMouseOver={e => (e.currentTarget.style.background = '#dc2626')}
              onMouseOut={e => (e.currentTarget.style.background = '#ef4444')}
            >
              &#10005;
            </button>
            <CartDisplay />
          </div>
        </div>
      )}
    </>
  );
};

export default CartIcon;
