import React from "react";
import SectionTitle from "./ui/SectionTitle";

const Gallery = () => {
  const images = [
    {
      url: "school.jpg",
      caption: "Students at prayer",
    },
    {
      url: "yoga.jpg",
      caption: "Yoga classes",
    },
    {
      url: "plant.jpg",
      caption: "Plantations by students",
    },
    {
      url: "cultural.jpg",
      caption: "Cultural activities",
    },
    {
      url: "holi.jpg",
      caption: "Holi celebrations",
    },
    {
      url: "celebration.jpg",
      caption: "Cultural events",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Gallery" subtitle="Glimpses of our school life" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-md cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-72 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white text-lg font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {image.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
