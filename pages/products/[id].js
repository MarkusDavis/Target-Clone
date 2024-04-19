import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '@/context/AuthContext';
import { ShoppingCartContext } from '@/context/ShoppingCartContext';
import Header from '@/components/Layout/Header';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import Layout from '@/components/Layout/Layout';
import Image from 'next/image';

export default function ProductPage() {
  const { user } = useContext(AuthContext);
  const { addToCart } = useContext(ShoppingCartContext);
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const db = getFirestore();
      const productRef = doc(db, 'products', id);
      const productSnap = await getDoc(productRef);
      if (productSnap.exists()) {
        const productData = {
          id: productSnap.id,
          ...productSnap.data(),
        };
        setProduct(productData);
        setSelectedImage(productData.imageUrl);
      } else {
        router.push('/404');
      }
    };
    if (id) {
      fetchProduct();
    }
  }, [id, router]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    if (product) {
      const item = {
        id: product.id,
        title: product.name,
        price: product.price,
        imageUrl: product.imageUrl,
      };

      if (item.id && item.title && item.price && item.imageUrl) {
        addToCart(item);
      } else {
        console.error('Invalid item data:', item);
      }
    }
  };

  return (
    <Layout>
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <div className="flex items-center justify-center mb-6">
                <Image
                  src={selectedImage}
                  alt={product.title}
                  width={500}
                  height={500}
                />
              </div>
              <div className="flex justify-center space-x-4">
                {product.additionalImages?.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt={`Additional Image ${index + 1}`}
                    width={80}
                    height={80}
                    onClick={() => setSelectedImage(image)}
                    className="cursor-pointer"
                  />
                ))}
              </div>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-4">
                {product.name}
              </h1>
              <span>{product.title}</span>
              <div className="flex items-center mb-4">
                <span className="text-lg font-bold text-red-600">${product.price}</span>
              </div>
              <div className="mb-6">
                <h3 className="font-bold mb-2">Description</h3>
                <p>{product.description}</p>
              </div>
              <div className="mb-6">
                <h3 className="font-bold mb-2">Highlights</h3>
                <ul className="list-disc pl-5">
                  {product.highlights?.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-6">
                <h3 className="font-bold mb-2">Specifications</h3>
                {/* Render product specifications */}
              </div>
              <div className="mb-6">
                <h3 className="font-bold mb-2">Shipping & Returns</h3>
                {/* Render shipping and returns information */}
              </div>
              <div className="mb-6">
                <h3 className="font-bold mb-2">Q&A</h3>
                {/* Render Q&A section */}
              </div>
              <div className="flex items-center mb-6">
                <label htmlFor="quantity" className="mr-2">Qty:</label>
                <select id="quantity" className="border border-gray-300 rounded px-2 py-1">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <button
                className="bg-red-600 text-white px-6 py-3 rounded-full text-lg font-bold mb-6"
                onClick={handleAddToCart}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}