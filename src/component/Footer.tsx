import React from 'react'

function Footer(): React.ReactElement {
  return (
    <div>
        {/* Footer */}
  <footer className="bg-gray-800 text-white py-12 px-5">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h3 className="text-xl font-bold mb-4">FASHIONHUB</h3>
        <p className="text-gray-400">
          Your one-stop shop for the latest fashion trends and styles.
        </p>
      </div>
      <div>
        <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Shop
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-lg mb-4">Customer Service</h4>
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              FAQs
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Shipping Policy
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Returns &amp; Exchanges
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-lg mb-4">Connect With Us</h4>
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-300 text-xl"
          >
            <i className="fab fa-facebook" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-300 text-xl"
          >
            <i className="fab fa-twitter" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-300 text-xl"
          >
            <i className="fab fa-instagram" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-300 text-xl"
          >
            <i className="fab fa-pinterest" />
          </a>
        </div>
      </div>
    </div>
    <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
      <p>© 2025 FASHIONHUB. All rights reserved.</p>
    </div>
  </footer>
    </div>
  )
}

export default Footer