"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    img: "/hero1.jpg",
    desc: "Go'zallik — bu o'ziga ishonch! Biz sizga mana shu ishonchni yanada ortirishga va o'z uslubingizni topishda, har kuningizni yorqin, o'ziga xos qilishda yordam beramiz. Style Pick — sizning shaxsiy moda (do'stingiz).",
  },
  {
    img: "/hero2.png",
    desc: "Ko'rkamlik — bu muvozanat. Qulaylik, nafislik va o‘ziga xoslikni birlashtirib, sizga eng mos ko‘rinishni topamiz.",
  },
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen min-h-screen overflow-hidden" id="home">
      {/* Background image with overlay */}
      <div className="absolute inset-0 transition-all duration-700">
        <Image
          src={slides[index].img}
          alt="Hero background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full flex flex-col items-start pb-20">
        <div
          className="relative"
          style={{ height: "180px", width: "min(90vw, 600px)" }}
        >
          {/* Blurred background for the text, fixed size */}
          <div
            className="absolute left-0 top-0 h-full w-full bg-black/30 backdrop-blur-md rounded-none md:rounded-r-lg"
            aria-hidden="true"
          ></div>
          <p className="relative text-xl text-white/90 p-6 px-10 z-10">
            {slides[index].desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
