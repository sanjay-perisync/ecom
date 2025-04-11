import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-8 md:px-16 lg:px-32">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-800 mb-4">About Us</h2>
        <p className="text-gray-600 text-lg mb-8">
          Welcome to <span className="font-semibold text-green-800">ShopVerse</span>, your go-to destination for all your shopping needs. We’re committed to offering the best selection, affordable prices, and exceptional customer service.
        </p>

        <div className="grid lg:grid-cols-3 gap-8 text-left">
          <div className="p-6 border border-gray-200 rounded-xl ">
            <h3 className="text-xl font-semibold mb-2 text-green-800">🚚 Fast Delivery</h3>
            <p className="text-gray-600">
              Get your products delivered to your doorstep quickly with our trusted delivery partners.
            </p>
          </div>

          <div className="p-6 border border-gray-200 rounded-xl ">
            <h3 className="text-xl font-semibold mb-2 text-green-800">🔒 Secure Payments</h3>
            <p className="text-gray-600">
              We use industry-standard encryption to ensure your payment information is safe.
            </p>
          </div>

          <div className="p-6 border border-gray-200 rounded-xl ">
            <h3 className="text-xl font-semibold mb-2 text-green-800">💬 24/7 Support</h3>
            <p className="text-gray-600">
              Our friendly support team is available around the clock to help with any issues.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center">
          {/* <img src="https://www.pngmart.com/files/11/Shopping-PNG-Free-Download.png" alt="" className="w-64"/> */}
          <h3 className="text-2xl font-semibold text-green-800 mb-4 ">Why Shop With Us?</h3>
          <ul className="text-start text-gray-600 space-y-2 ">
            <li>✅ Curated collections with top-rated products</li>
            <li>✅ Affordable pricing with exclusive deals</li>
            <li>✅ Easy returns & refunds process</li>
            <li>✅ Verified customer reviews and ratings</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
