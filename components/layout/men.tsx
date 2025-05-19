"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const userName = "Oxunjon";

const styleImages = ["/stylem.png", "/stylem1.png", "/stylem2.png"];

const selectImages = [
  "/aim.png",
  "/aim1.png",
  "/aim2.png",
  "/aim3.png",
  "/aim4.png",
  "/aim5.png",
  "/aim6.png",
  "/aim7.png",
  "/aim8.png",
];

const bigImages = ["/avatarm.png", "/avatarm1.png", "/avatarm2.png"];

const slides = [
  {
    img: "/mb.png",
    desc: "Ko‘rinishingiz – Siz haqingizdagi birinchi taassurot",
  },
];

const Men = () => {
  const [index] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [bigImgIdx, setBigImgIdx] = useState(0);
  const [styleIdx, setStyleIdx] = useState(0);
  return (
    <>
      {/* HEADER - rasm tepasida */}
      <header className="w-full z-20 bg-[#F2EFE6]">
        <div className="w-full shadow-none border-t-0 px-10">
          <div className="w-full flex text-xm justify-between items-center h-15">
            {/* Chapda navigation */}
            <div className="flex gap-15">
              <Link
                href="/#home"
                className="font-medium text-black hover:text-primary transition-colors"
              >
                Bosh sahifa
              </Link>
              <Link
                href="/#about"
                className="font-medium text-black hover:text-primary transition-colors"
              >
                Biz haqimizda
              </Link>
              <Link
                href="/women"
                className="font-medium text-black hover:text-primary transition-colors"
              >
                Ayollar
              </Link>
              <Link
                href="/men"
                className="font-medium text-black hover:text-primary transition-colors"
              >
                Erkaklar
              </Link>
              <Link
                href="/shop"
                className="font-medium text-black hover:text-primary transition-colors"
              >
                Do&apos;kon
              </Link>
            </div>
            {/* O'ngda user ismi va avatar */}
            <div className="flex items-center gap-3">
              <span className="font-medium text-black">{userName}</span>
              <div className="w-11 h-11 rounded-full bg-black flex items-center justify-center">
                <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
                  {userName.charAt(0)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Bitta rasm va description */}
      <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden mb-0">
        <div className="absolute inset-0 transition-all duration-700">
          <Image
            src={slides[index].img}
            alt="Women background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        {/* Content */}
        <div className="absolute bottom-0 left-0 w-full flex flex-col items-start pb-20">
          <div
            className="relative"
            style={{ height: "90px", width: "min(80vw, 400px)" }}
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
      </section>

      {/* Frame: 3 ta style rasm */}
      <div className="w-full flex flex-col items-center py-10 bg-white box-border">
        <div className="w-full max-w-7xl rounded-2xl bg-[#B2B1B0] shadow-lg px-0 sm:px-0 lg:px-0 py-10 flex flex-col items-center box-border mx-auto">
          <div className="flex flex-col md:flex-row gap-10 w-full items-center justify-center">
            {/* Yangi uslub frame */}
            <div className="w-full md:w-64 h-90 md:h-100 rounded-xl shadow bg-white flex flex-col items-center justify-center p-4 md:p-6 mb-6 md:mb-0">
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                O&apos;z uslubingizni yarating
              </h3>
              <p className="text-gray-600 text-center mb-6 text-[15px]">
                Har bir detal siz haqingizda gapiradi. Smart casualdan tortib,
                klassik obrazlargacha – sizga mos ko‘rinishni tanlang.
              </p>
              <button
                className="mt-auto bg-black hover:bg-primary/80 text-white font-semibold px-6 py-2 rounded-lg transition"
                onClick={() => setShowModal(true)}
              >
                Yangi uslub yaratish
              </button>
            </div>
            {/* 3 ta style rasm carousel */}
            <div className="flex items-center gap-2">
              {/* Chapga strelka faqat birinchi rasmda */}
              <button
                className="bg-black/70 hover:bg-black text-white rounded-full p-2 z-10"
                style={{
                  visibility: styleImages.length > 1 ? "visible" : "hidden",
                }}
                onClick={() =>
                  setStyleIdx((prev) =>
                    prev === 0 ? styleImages.length - 1 : prev - 1
                  )
                }
                aria-label="Oldingi rasm"
              >
                <ChevronLeft size={28} />
              </button>
              {/* 3 ta style rasm */}
              {Array(3)
                .fill(0)
                .map((_, i) => {
                  const imgIdx = (styleIdx + i) % styleImages.length;
                  return (
                    <div
                      key={imgIdx}
                      className="w-64 h-100 rounded-xl overflow-hidden shadow bg-white flex items-center justify-center relative mx-2"
                    >
                      <Image
                        src={styleImages[imgIdx]}
                        alt={`Style ${imgIdx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  );
                })}
              {/* O'ngga strelka faqat uchinchi rasmda */}
              <button
                className="bg-black/70 hover:bg-black text-white rounded-full p-2 z-10"
                style={{
                  visibility: styleImages.length > 1 ? "visible" : "hidden",
                }}
                onClick={() =>
                  setStyleIdx((prev) => (prev + 1) % styleImages.length)
                }
                aria-label="Keyingi rasm"
              >
                <ChevronRight size={28} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Orqa fonni xira qilish */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          />
          {/* Modal frame */}
          <div className="relative bg-white rounded-xl shadow-2xl flex flex-col md:flex-row w-[95vw] max-w-4xl h-[80vh] z-50 overflow-hidden">
            {/* Chap yarmi: katta rasm va strelkalar */}
            <div className="flex-1 flex items-center justify-center bg-[#F2EFE6] relative">
              {/* Chapga strelka */}
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-black rounded-full p-2 shadow"
                onClick={(e) => {
                  e.stopPropagation();
                  setBigImgIdx((prev) =>
                    prev === 0 ? bigImages.length - 1 : prev - 1
                  );
                }}
                aria-label="Oldingi rasm"
              >
                <ChevronLeft size={28} />
              </button>
              {/* Rasm */}
              <Image
                src={bigImages[bigImgIdx]}
                alt="Tanlangan rasm"
                width={140}
                height={200}
                className="object-cover rounded-lg"
              />
              {/* O'ngga strelka */}
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-white rounded-full p-2 shadow"
                onClick={(e) => {
                  e.stopPropagation();
                  setBigImgIdx((prev) =>
                    prev === bigImages.length - 1 ? 0 : prev + 1
                  );
                }}
                aria-label="Keyingi rasm"
              >
                <ChevronRight size={28} />
              </button>
            </div>
            {/* O'ng yarmi: 9 ta rasm */}
            <div className="flex-1 flex flex-col justify-between p-6 sm:p-6 bg-[#FAF6F3]">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-6">
                {selectImages.map((img, idx) => (
                  <div
                    key={idx}
                    className="w-full aspect-square rounded-lg overflow-hidden border bg-[#FAF6F3] flex items-center justify-center"
                  >
                    <Image
                      src={img}
                      alt={`Tanlash ${idx + 1}`}
                      width={80}
                      height={90}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <Link href="/men-service" passHref>
                <button
                  className="w-full bg-black hover:bg-primary/80 text-white font-semibold py-3 rounded-lg transition"
                  onClick={() => setShowModal(false)}
                >
                  Next
                </button>
              </Link>
            </div>
            {/* Yopish tugmasi */}
            <button
              className="absolute top-3 right-3 text-black text-2xl font-bold"
              onClick={() => setShowModal(false)}
              aria-label="Yopish"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Men;
