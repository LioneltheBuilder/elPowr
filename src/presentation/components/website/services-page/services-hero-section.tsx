import React from "react";

function ServicesHeroSection() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 relative pt-12">
      <div
        className="absolute inset-0 pointer-events-none max-w-screen-xl mx-auto"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
          backgroundPosition: "center center",
        }}
      />

      <div className="text-center mb-16">
      <div className="inline-flex items-center rounded-full border border-[#9AE662]/20 bg-[#9AE662]/10 px-3 py-1 text-sm text-[#9AE662]">
            <span className="mr-1">+</span> Services
          </div>
        <h2 className="text-4xl md:text-5xl text-white mb-4 py-6">
        Custom Solutions for Your Digital Needs.
        </h2>
        <p className="text-gray-400  max-w-3xl mx-auto">
        At Digital Builders, we combine technical expertise with creative thinking to deliver tailored solutions that help your business thrive. Whether you need a sleek website, a powerful marketing campaign, or an unforgettable event, we’ve got you covered.
        </p>
      </div>
    </div>
  );
}

export default ServicesHeroSection;
