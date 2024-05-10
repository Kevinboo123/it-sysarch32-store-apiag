import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../config/firebase';
import { doc, getDoc } from 'firebase/firestore';

const ProductDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productDoc = await getDoc(doc(db, 'products', productId));

                if (productDoc.exists()) {
                    setProduct({ id: productDoc.id, ...productDoc.data() });
                } else {
                    console.error('Product not found.');
                }
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, [productId]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="max-w-7xl mx-auto px-6 mt-10">
            <h1 className="text-3xl font-semibold text-slate-700 mb-4">{product.name}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <img src={product.imageUrl} alt={product.name} className="w-full h-96 object-cover" />
                </div>
                <div className="p-4">
                    <p className="text-gray-800 font-semibold">Price: {product.price}</p>
                    <p className="text-gray-600">Brand: {product.shoes}</p>
                    <p className="text-gray-600">Type: {product.type}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
