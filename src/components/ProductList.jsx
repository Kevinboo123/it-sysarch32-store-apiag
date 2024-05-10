import React, { useState, useEffect } from 'react';
import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsSnapshot = await getDocs(collection(db, 'products'));

                const productList = productsSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));

                setProducts(productList);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-6 mb-20">
            <h1 className='text-3xl font-semibold text-slate-700 mb-10'>Products</h1>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {products.map(product => (
                    <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                        <Link to={`/product/${product.id}`}>
                            <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
                        </Link>
                        <div className="p-4">
                            <h3 className="text-gray-800 font-semibold">{product.name}</h3>
                            <p className="text-gray-600">{product.price}</p>
                            <p className="text-gray-600">Brand: {product.shoes}</p>
                            <p className="text-gray-600">Type: {product.type}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
