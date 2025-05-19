"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown } from "lucide-react";

const images = [
  "/shop.png",
  "/shop2.png",
  "/shop3.png",
];

const userName = "User"; // Misol uchun

const products = [
  { id: 1, img: "/p.png", price: "120 000 so'm" },
  { id: 1, img: "/p1.png", price: "120 000 so'm" },
  { id: 1, img: "/p2.png", price: "120 000 so'm" },
  { id: 1, img: "/p3.png", price: "120 000 so'm" },
  { id: 1, img: "/p4.png", price: "120 000 so'm" },
  { id: 1, img: "/p5.png", price: "120 000 so'm" },
  { id: 1, img: "/p6.png", price: "120 000 so'm" },
  { id: 1, img: "/p7.png", price: "120 000 so'm" },
  { id: 1, img: "/p8.png", price: "120 000 so'm" },
  { id: 1, img: "/p9.png", price: "120 000 so'm" },
  { id: 1, img: "/p10.png", price: "120 000 so'm" },
  { id: 1, img: "/p11.png", price: "120 000 so'm" },
  { id: 1, img: "/p12.png", price: "120 000 so'm" },
  { id: 1, img: "/p13.png", price: "120 000 so'm" },
  { id: 1, img: "/p14.png", price: "120 000 so'm" },
  { id: 1, img: "/p15.png", price: "120 000 so'm" },
  { id: 1, img: "/p16.png", price: "120 000 so'm" },
  { id: 1, img: "/p17.png", price: "120 000 so'm" },
  { id: 1, img: "/p18.png", price: "120 000 so'm" },
  { id: 1, img: "/p18.png", price: "120 000 so'm" },
  { id: 1, img: "/p19.png", price: "120 000 so'm" },
  { id: 1, img: "/p20.png", price: "120 000 so'm" },
  { id: 1, img: "/p21.png", price: "120 000 so'm" },
  { id: 1, img: "/p22.png", price: "120 000 so'm" },
];

const filterMenus: Record<string, string[]> = {
  "Ko'ylak": ["Qishki", "Yozgi", "Atlas", "Yupqa"],
  "Shim": ["Klassik", "Sport", "Qishki", "Yozgi"],
  "Yupka": ["Uzun", "Qisqa", "Keng", "Tor"],
  "Klassik": ["Kostyum", "Ko'ylak", "Shim"],
  "Poyabzal": ["Krossovka", "Tufli", "Sport", "Kundalik"],
};

const filters = Object.keys(filterMenus);

const Shop = () => {
  const [index, setIndex] = useState(0);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* HEADER - rasm tepasida */}
      <header className="w-full z-20 bg-[#F2EFE6]">
        <div className="w-full shadow-none border-t-0 px-10">
          <div className="w-full flex text-xm justify-between items-center h-15">
            {/* Chapda navigation */}
            <div className="flex gap-15">
              <Link href="/#home" className="font-medium text-black hover:text-primary transition-colors">Bosh sahifa</Link>
              <Link href="/#about" className="font-medium text-black hover:text-primary transition-colors">Biz haqimizda</Link>
              <Link href="/women" className="font-medium text-black hover:text-primary transition-colors">Ayollar</Link>
              <Link href="/men" className="font-medium text-black hover:text-primary transition-colors">Erkaklar</Link>
              <Link href="/shop" className="font-medium text-black hover:text-primary transition-colors">Do&apos;kon</Link>
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

      {/* Rasm slider */}
      <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden mb-0">
        <div className="absolute inset-0 transition-all duration-700">
          <Image
            src={images[index]}
            alt="Shop background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      </section>

      {/* Filtr va qidiruv rasm ostida */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 px-8 py-6 bg-white shadow mb-0">
        {/* Filtrlar chapda */}
        <div className="flex gap-3 flex-wrap">
          {filters.map((filter) => (
            <div key={filter} className="relative">
              <button
                className="bg-[#F2EFE6] hover:bg-[#e5e2d9] text-black font-semibold px-4 py-2 rounded-lg shadow transition flex items-center gap-1"
                onClick={() => setOpenMenu(openMenu === filter ? null : filter)}
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
        <form className="flex items-center bg-[#F2EFE6] rounded-lg px-3 py-2 shadow">
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
      <div className="w-full px-8 pb-10 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <div
        key={product.id + idx}
        className={
          `bg-[#F2EFE6] rounded-xl shadow flex flex-col items-center p-0
          h-[460px]` + // kartochka balandligi qat’iy
          ((idx % 4 === 1 || idx % 4 === 3) ? " lg:mt-20" : "")
        }
            >
              {/* Rasm */}
              <div className="w-full h-100 relative rounded-t-xl overflow-hidden">
                <Image
                  src={product.img}
                  alt="Mahsulot rasmi"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Narx alohida oq blokda */}
              <div className="w-full bg-white py-4 flex justify-center items-center rounded-b-xl">
                <span className="text-lg font-semibold text-red-500">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
 
export default Shop;