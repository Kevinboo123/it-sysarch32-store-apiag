
import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-blue-400 shadow-lg mb-10 bottom-0">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <h1 className='text-xl font-semibold text-white'>Apiag Shoes</h1>
                    </div>
                    <div className="hidden md:block">
                        <div className="flex items-center space-x-4">
                            <a href="/" className="text-white hover:text-gray-300 px-3 py-2">
                                Home
                            </a>
                            <a href="/shop" className="text-white hover:text-gray-300 px-3 py-2">
                                Shop
                            </a>
                            <a href="/about" className="text-white hover:text-gray-300 px-3 py-2">
                                About
                            </a>
                            <a href="/contact" className="text-white hover:text-gray-300 px-3 py-2">
                                Contact
                            </a>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button
                            className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
                            aria-label="Menu"
                        >
                            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                                <path
                                    fillRule="evenodd"
                                    d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;