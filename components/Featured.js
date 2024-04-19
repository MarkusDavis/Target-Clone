import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';

// Sample product data
const products = [
  {
    id: 1,
    name: 'Product 1',
    imageUrl: 'https://via.placeholder.com/200',
    price: '$19.99',
    description: 'Description for product 1',
  },
  // Add more products as needed
];

const ProductCarousel = () => {
  return (
    <div className="py-8">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="h-full"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="flex justify-center">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img className="w-full" src={product.imageUrl} alt={product.name} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{product.name}</div>
                <p className="text-gray-700 text-base">{product.description}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{product.price}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCarousel;
