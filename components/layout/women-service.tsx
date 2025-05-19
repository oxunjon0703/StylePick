"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const userName = "Roziyabonu";

const productImages = ["/wk.png", "/wk1.png", "/wk2.png", "/wk3.png"];
const mainImage = "/ww.png";

const products = [
  { id: 1, img: "/p14.png" },
  { id: 1, img: "/p.png" },
  { id: 3, img: "/p6.png" },
  { id: 4, img: "/p.png" },
];

const products1 = [
  { id: 1, img: "/p7.png" },
  { id: 2, img: "/p20.png" },
  { id: 3, img: "/p4.png" },
  { id: 4, img: "/p20.png" },
];

const products2 = [
  { id: 1, img: "/p11.png" },
  { id: 2, img: "/p13.png" },
  { id: 3, img: "/p8.png" },
  { id: 4, img: "/p13.png" },
];

const products3 = [
  { id: 1, img: "/p3.png" },
  { id: 2, img: "/p17.png" },
  { id: 3, img: "/p12.png" },
  { id: 3, img: "/p17.png" },
];

const filterMenus: Record<string, string[]> = {
  "Ko'ylak": ["Qishki", "Yozgi", "Atlas", "Yupqa"],
  Shim: ["Klassik", "Sport", "Qishki", "Yozgi"],
  Yupka: ["Uzun", "Qisqa", "Keng", "Tor"],
  Klassik: ["Kostyum", "Ko'ylak", "Shim"],
  Poyabzal: ["Krossovka", "Tufli", "Sport", "Kundalik"],
};

const filters = Object.keys(filterMenus);

const WomenService = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [productIdx, setProductIdx] = useState(0);
  return (
    <>
      <div className="min-h-screen bg-white">
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

        {/* Mahsulot preview qismi */}
        <div className="w-full flex flex-col md:flex-row gap-15 py-10 bg-white box-border max-w-6xl mx-auto">
          {/* Chapda 4 ta rasm ustma-ust */}
          <div className="flex flex-row md:flex-col gap-2 md:gap-2 pl-0 ml-[-15px] min-w-max">
            {productImages.map((img, i) => (
              <div
                key={i}
                className="relative w-30 h-50 rounded-xl overflow-hidden bg-gray-200 flex items-center justify-center"
              >
                <Image
                  src={img}
                  alt={`Mahsulot kichik rasm ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          {/* O'rtada katta rasm */}
          <div className="flex-1 flex items-center justify-center min-w-[400px]">
            <div className="relative w-[550px] h-[800px] rounded-2xl overflow-hidden bg-gray-100 flex items-center justify-center">
              <Image
                src={mainImage}
                alt="Mahsulot katta rasm"
                fill
                className="object-cover"
              />
            </div>
          </div>
          {/* O'ngda ma'lumotlar */}
          <div className="flex-1 flex flex-col justify-between max-w-lg h-[800px] py-10">
            <div className="space-y-15 flex-1 flex flex-col justify-center">
              <div className="text-2xl text-[#000000] font-bold">
                Do’kon / Zara
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                Zamonaviy Fit rasmiy kostyum
              </h2>
              <p className="text-gray-700">
                Zamonaviy siluet uchun kesilgan, bu zamonaviy mos rasmiy kostyum
                keskin chiziqlar va ish uchrashuvlari, to&apos;ylar va kechki
                tadbirlar uchun juda mos keladi.
              </p>
              <div className="flex flex-col gap-3 text-gray-700 text-base">
                <span>
                  <b>Mahsulot rangi:</b> Qora
                </span>
                {/* Ranglar doiralari */}
                <div className="flex gap-4 py-2">
                  <span className="w-6 h-6 rounded-full bg-black ring-2 ring-black border border-gray-300"></span>
                  <span className="w-6 h-6 rounded-full bg-[#809AB9] border border-gray-300"></span>
                  <span className="w-6 h-6 rounded-full bg-[#373E55] border border-gray-300"></span>
                  <span className="w-6 h-6 rounded-full bg-[#273F8E] border border-gray-300"></span>
                  <span className="w-6 h-6 rounded-full bg-[#009F5E] border border-gray-300"></span>
                </div>
                <span>
                  <b>Mahsulot razmeri: S</b>
                </span>
                {/* Razmerlar to'rtburchaklar */}
                <div className="flex gap-2 py-2">
                  <span className="px-3 py-1 rounded-lg border border-gray-300 bg-white text-gray-700 font-semibold cursor-pointer">
                    XS
                  </span>
                  <span className="px-3 py-1 rounded-lg border-2 border-black bg-black text-white font-semibold cursor-pointer">
                    S
                  </span>
                  <span className="px-3 py-1 rounded-lg border border-gray-300 bg-white text-gray-700 font-semibold cursor-pointer">
                    M
                  </span>
                  <span className="px-3 py-1 rounded-lg border border-gray-300 bg-white text-gray-700 font-semibold cursor-pointer">
                    L
                  </span>
                  <span className="px-3 py-1 rounded-lg border border-gray-300 bg-white text-gray-700 font-semibold cursor-pointer">
                    XL
                  </span>
                </div>
              </div>
            </div>
            <button className="bg-black hover:bg-primary/80 text-white font-semibold px-6 py-3 rounded-lg transition w-full max-w-xs mt-8">
              Savatchaga qo&apos;shish
            </button>
          </div>
        </div>

        {/* Filtr va qidiruv rasm ostida */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 px-8 py-6 bg-[#F2EFE6] shadow mb-0">
          {/* Filtrlar chapda */}
          <div className="flex gap-3 flex-wrap">
            {filters.map((filter) => (
              <div key={filter} className="relative">
                <button
                  className="bg-white hover:bg-[#e5e2d9] text-black font-semibold px-4 py-2 rounded-lg shadow transition flex items-center gap-1"
                  onClick={() =>
                    setOpenMenu(openMenu === filter ? null : filter)
                  }
                  type="button"
                >
                  {filter}
                  <ChevronDown size={18} className="ml-1" />
                </button>
                {/* Pastki menyu */}
                {openMenu === filter && (
                  <div className="absolute left-0 mt-2 w-40 bg-white border rounded-lg shadow z-20">
                    <ul className="py-2 text-sm text-gray-700">
                      {filterMenus[filter].map((item) => (
                        <li
                          key={item}
                          className="px-4 py-2 hover:bg-[#F2EFE6] cursor-pointer"
                          onClick={() => setOpenMenu(null)}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* Qidiruv o‘ngda */}
          <form className="flex items-center bg-white rounded-lg px-3 py-2 shadow">
            <input
              type="text"
              placeholder="Qidiruv..."
              className="bg-transparent outline-none text-black px-2"
            />
            <button type="submit" className="ml-2 text-black">
              <Search size={20} />
            </button>
          </form>
        </div>
        {/* Mahsulotlar grid */}
        <div className="w-full px-12 pb-10 bg-white lg:mt-10">
          <div className="flex items-center gap-8 justify-center">
            {/* Chapga strelka */}
            <button
              className="bg-black/70 hover:bg-black text-white rounded-full p-2 z-10"
              style={{ visibility: products.length > 3 ? "visible" : "hidden" }}
              onClick={() =>
                setProductIdx((prev) =>
                  prev === 0 ? products.length - 1 : prev - 1
                )
              }
              aria-label="Oldingi mahsulotlar"
            >
              <ChevronLeft size={28} />
            </button>
            {/* 3 ta mahsulot kartasi */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-35 flex-1">
              {Array(3)
                .fill(0)
                .map((_, i) => {
                  const idx = (productIdx + i) % products.length;
                  return (
                    <div
                      key={products[idx].img + idx}
                      className="bg-[#F2EFE6] rounded-xl shadow flex flex-col items-center p-0 h-[510px]"
                    >
                      <div className="relative w-full h-full rounded-xl overflow-hidden">
                        <Image
                          src={products[idx].img}
                          alt="Mahsulot rasmi"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
            {/* O'ngga strelka */}
            <button
              className="bg-black/70 hover:bg-black text-white rounded-full p-2 z-10"
              style={{ visibility: products.length > 3 ? "visible" : "hidden" }}
              onClick={() =>
                setProductIdx((prev) => (prev + 1) % products.length)
              }
              aria-label="Keyingi mahsulotlar"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>
        <div className="w-full px-12 pb-10 bg-white lg:mt-10">
          <div className="flex items-center gap-8 justify-center">
            {/* Chapga strelka */}
            <button
              className="bg-black/70 hover:bg-black text-white rounded-full p-2 z-10"
              style={{
                visibility: products1.length > 3 ? "visible" : "hidden",
              }}
              onClick={() =>
                setProductIdx((prev) =>
                  prev === 0 ? products1.length - 1 : prev - 1
                )
              }
              aria-label="Oldingi mahsulotlar"
            >
              <ChevronLeft size={28} />
            </button>
            {/* 3 ta mahsulot kartasi */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-35 flex-1">
              {Array(3)
                .fill(0)
                .map((_, i) => {
                  const idx = (productIdx + i) % products1.length;
                  return (
                    <div
                      key={products1[idx].img + idx}
                      className="bg-[#F2EFE6] rounded-xl shadow flex flex-col items-center p-0 h-[510px]"
                    >
                      <div className="relative w-full h-full rounded-xl overflow-hidden">
                        <Image
                          src={products1[idx].img}
                          alt="Mahsulot rasmi"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
            {/* O'ngga strelka */}
            <button
              className="bg-black/70 hover:bg-black text-white rounded-full p-2 z-10"
              style={{
                visibility: products1.length > 3 ? "visible" : "hidden",
              }}
              onClick={() =>
                setProductIdx((prev) => (prev + 1) % products1.length)
              }
              aria-label="Keyingi mahsulotlar"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>
        <div className="w-full px-12 pb-10 bg-white lg:mt-10">
          <div className="flex items-center gap-8 justify-center">
            {/* Chapga strelka */}
            <button
              className="bg-black/70 hover:bg-black text-white rounded-full p-2 z-10"
              style={{
                visibility: products2.length > 3 ? "visible" : "hidden",
              }}
              onClick={() =>
                setProductIdx((prev) =>
                  prev === 0 ? products2.length - 1 : prev - 1
                )
              }
              aria-label="Oldingi mahsulotlar"
            >
              <ChevronLeft size={28} />
            </button>
            {/* 3 ta mahsulot kartasi */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-35 flex-1">
              {Array(3)
                .fill(0)
                .map((_, i) => {
                  const idx = (productIdx + i) % products2.length;
                  return (
                    <div
                      key={products2[idx].img + idx}
                      className="bg-[#F2EFE6] rounded-xl shadow flex flex-col items-center p-0 h-[510px]"
                    >
                      <div className="relative w-full h-full rounded-xl overflow-hidden">
                        <Image
                          src={products2[idx].img}
                          alt="Mahsulot rasmi"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
            {/* O'ngga strelka */}
            <button
              className="bg-black/70 hover:bg-black text-white rounded-full p-2 z-10"
              style={{
                visibility: products2.length > 3 ? "visible" : "hidden",
              }}
              onClick={() =>
                setProductIdx((prev) => (prev + 1) % products2.length)
              }
              aria-label="Keyingi mahsulotlar"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>
        <div className="w-full px-12 pb-10 bg-white lg:mt-10">
          <div className="flex items-center gap-8 justify-center">
            {/* Chapga strelka */}
            <button
              className="bg-black/70 hover:bg-black text-white rounded-full p-2 z-10"
              style={{
                visibility: products3.length > 3 ? "visible" : "hidden",
              }}
              onClick={() =>
                setProductIdx((prev) =>
                  prev === 0 ? products3.length - 1 : prev - 1
                )
              }
              aria-label="Oldingi mahsulotlar"
            >
              <ChevronLeft size={28} />
            </button>
            {/* 3 ta mahsulot kartasi */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-35 flex-1">
              {Array(3)
                .fill(0)
                .map((_, i) => {
                  const idx = (productIdx + i) % products3.length;
                  return (
                    <div
                      key={products3[idx].img + idx}
                      className="bg-[#F2EFE6] rounded-xl shadow flex flex-col items-center p-0 h-[510px]"
                    >
                      <div className="relative w-full h-full rounded-xl overflow-hidden">
                        <Image
                          src={products3[idx].img}
                          alt="Mahsulot rasmi"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
            {/* O'ngga strelka */}
            <button
              className="bg-black/70 hover:bg-black text-white rounded-full p-2 z-10"
              style={{
                visibility: products3.length > 3 ? "visible" : "hidden",
              }}
              onClick={() =>
                setProductIdx((prev) => (prev + 1) % products3.length)
              }
              aria-label="Keyingi mahsulotlar"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WomenService;
