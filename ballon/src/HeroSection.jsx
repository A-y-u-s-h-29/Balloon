import React from "react";
import backgroundImg from "/images/hero2.jpg";

export default function HeroSection() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center px-6 py-20 md:px-16"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Fade Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/30 to-transparent"></div>


      <div className="relative max-w-3xl">
       

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          Best Balloon <br /> Decors
        </h1>

        <p className="mt-6 text-gray-800 text-lg leading-relaxed">
  Welcome to Best Balloon Decor — your trusted partner for beautiful and
  creative balloon decorations! 🎈<br />
  Planning a birthday, anniversary, surprise, or any special event? Call or
  message us directly, and we’ll turn your special day into an unforgettable
  celebration. We offer premium yet affordable decoration services along with a
  convenient cash-on-delivery option. Let’s make your next event truly
  memorable!
</p>


        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="tel:+919667277348"
            className="flex items-center gap-3 bg-[#ff6f61] text-white px-6 py-3 rounded-xl text-lg shadow-md hover:scale-105  hover:bg-[#fb4a3a] bgtransition"
          >
            <span className="">CALL NOW</span> 
          </a>

          
        </div>
      </div>
    </section>
  );
}
