import React from 'react';

const ClientReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Rahul Goel",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      review: "The decoration was all good and you have accept my request. Excellent service and quality!",
      product: "Blue Bliss Welcome Baby",
      productImage: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=80&h=80&fit=crop",
      rating: 5.0,
      verified: true
    },
    {
      id: 2,
      name: "Neha Gupta",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
      review: "The decoration is nice and beautiful. Exceeded my expectations completely!",
      product: "White And Gold Bliss Floral",
      productImage: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=80&h=80&fit=crop",
      rating: 5.0,
      verified: true
    },
    {
      id: 3,
      name: "Neha Dhingra",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      review: "Good backdrop, the decoraters were professional and punctual. Highly recommended!",
      product: "Experiment with Einstein Kids",
      productImage: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=80&h=80&fit=crop",
      rating: 4.5,
      verified: true
    },
    {
      id: 4,
      name: "Shruti S Tripathi",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      review: "Great service.. appreciate a lot. Will definitely use again for future events!",
      product: "Hot Air Love Balloon Decor",
      productImage: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=80&h=80&fit=crop",
      rating: 5.0,
      verified: true
    },
    {
      id: 5,
      name: "Prasiddhy S",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      review: "It is good. Affordable pricing with premium quality decoration.",
      product: "Budget-Friendly Package",
      productImage: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=80&h=80&fit=crop",
      rating: 4.0,
      verified: false
    },
    {
      id: 6,
      name: "Aarav Sharma",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      review: "Outstanding work! The team was creative and delivered exactly what we wanted.",
      product: "Premium Wedding Decor",
      productImage: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=80&h=80&fit=crop",
      rating: 5.0,
      verified: true
    },
    {
      id: 7,
      name: "Priya Patel",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      review: "Beautiful decorations that made our baby shower unforgettable. Thank you!",
      product: "Baby Shower Special",
      productImage: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=80&h=80&fit=crop",
      rating: 5.0,
      verified: true
    },
    {
      id: 8,
      name: "Rohan Mehta",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      review: "Professional service with attention to detail. The setup was perfect!",
      product: "Corporate Event Package",
      productImage: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=80&h=80&fit=crop",
      rating: 4.5,
      verified: true
    },
    {
      id: 9,
      name: "Ananya Singh",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
      review: "Loved the floral arrangements! Fresh flowers and elegant design.",
      product: "Floral Bliss Collection",
      productImage: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=80&h=80&fit=crop",
      rating: 5.0,
      verified: true
    },
    {
      id: 10,
      name: "Vikram Joshi",
      image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face",
      review: "Quick setup and beautiful results. Made our anniversary special!",
      product: "Anniversary Special",
      productImage: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=80&h=80&fit=crop",
      rating: 4.5,
      verified: true
    }
  ];

  // Duplicate reviews for seamless infinite scroll
  const duplicatedReviews = [...reviews, ...reviews, ...reviews];

  return (
    <div className="w-full bg-gradient-to-br from-white via-blue-50 to-pink-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
            What Our Clients Say
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover why thousands of customers trust us for their special moments
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Infinite Scroll Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Wrapper */}
          <div className="flex space-x-6 animate-scroll">
            {duplicatedReviews.map((review, index) => (
              <div
                key={`${review.id}-${index}`}
                className="flex-shrink-0 w-80 transform transition-all duration-500 hover:scale-105"
              >
                {/* Review Card */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 h-full flex flex-col hover:shadow-2xl transition-all duration-300">
                  {/* Header with Profile and Rating */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <img
                          src={review.image}
                          alt={review.name}
                          className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-md"
                        />
                        {review.verified && (
                          <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{review.name}</h3>
                        <div className="flex items-center space-x-1">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className={`w-4 h-4 ${i < Math.floor(review.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <span className="text-sm font-medium text-gray-600">{review.rating}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-blue-500">
                      <svg className="w-8 h-8 opacity-20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                      </svg>
                    </div>
                  </div>

                  {/* Review Text */}
                  <div className="flex-grow mb-6">
                    <p className="text-gray-700 leading-relaxed text-sm line-clamp-4">
                      "{review.review}"
                    </p>
                  </div>

                  {/* Product Info */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                    <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 shadow-md">
                      <img
                        src={review.productImage}
                        alt={review.product}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-grow min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {review.product}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {review.verified ? 'Verified Purchase' : 'Customer Review'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">500+</div>
            <div className="text-sm text-gray-600 mt-1">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-600">4.9/5</div>
            <div className="text-sm text-gray-600 mt-1">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">1000+</div>
            <div className="text-sm text-gray-600 mt-1">Events Decorated</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-600">98%</div>
            <div className="text-sm text-gray-600 mt-1">Recommend Us</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-344px * 10 - 1.5rem * 10));
          }
        }

        .animate-scroll {
          animation: scroll 60s linear infinite;
          display: flex;
          width: max-content;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        @media (max-width: 768px) {
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-320px * 10 - 1.5rem * 10));
            }
          }
        }
      `}</style>
    </div>
  );
};

export default ClientReviews;