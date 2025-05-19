"use client";

import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="py-16 bg-white" id="about">
      <div className="w-full px-10 mb-8">
        <p className="text-gray-700 text-lg leading-relaxed">
          StylePick foydalanuvchilarga o&apos;z didi, o&apos;lchami va
          byudjetiga mos kiyimlarni tez va oson topishga yordam beruvchi aqlli
          veb-platforma. Do&apos;konlardagi kiyimlarni to&apos;g&apos;ri
          saralab, eng mos variantlarni biz bilan tanlang!
        </p>
      </div>
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <div className="w-full flex flex-col md:flex-row gap-4 px-0">
            <div className="flex-1 overflow-hidden rounded-lg shadow-lg h-120 relative">
              <Image
                src="/about1.png"
                alt="Smart farming technology"
                fill
                className="object-cover w-full h-full transition-transform hover:scale-105"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="flex-1 overflow-hidden rounded-lg shadow-lg h-120 relative">
              <Image
                src="/about2.png"
                alt="StylePick platform"
                fill
                className="object-cover w-full h-full transition-transform hover:scale-105"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-4 px-0">
          <div className="flex-1 overflow-hidden rounded-lg shadow-lg h-200 relative">
            <Image
              src="/m1.png"
              alt="Smart farming technology"
              fill
              className="object-cover w-full h-full transition-transform hover:scale-105"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="flex-1 overflow-hidden rounded-lg shadow-lg h-200 relative">
            <Image
              src="/m2.png"
              alt="StylePick platform"
              fill
              className="object-cover w-full h-full transition-transform hover:scale-105"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
