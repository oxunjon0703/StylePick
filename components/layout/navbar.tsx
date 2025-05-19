"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const userName = "User"; // Misol uchun

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="absolute top-0 left-0 w-full z-20">
      {/* Tepada o'rtada proekt nomi */}
      {pathname === "/" && (
        <div className="w-full bg-transparent py-6 shadow-none px-10">
          <div className="w-full flex justify-center items-center">
            <Image
              src="/StylePick AI.png"
              alt="Buxgalter"
              width={290}
              height={200}
            />
          </div>
        </div>
      )}
      {/* Pastki qism: chapda navigation, o'ngda user */}
      {pathname === "/" && (
        <div className={`w-full shadow-none border-t-0 px-10`}>
          <div className="w-full flex text-xm justify-between items-center h-0">
            {/* Chapda navigation */}
            <div className="flex gap-15">
              <Link
                href="/#home"
                className="font-medium text-white hover:text-primary transition-colors"
              >
                Bosh sahifa
              </Link>
              <Link
                href="/#about"
                className="font-medium text-white hover:text-primary transition-colors"
              >
                Biz haqimizda
              </Link>
              <Link
                href="/women"
                className="font-medium text-white hover:text-primary transition-colors"
              >
                Ayollar
              </Link>
              <Link
                href="/men"
                className="font-medium text-white hover:text-primary transition-colors"
              >
                Erkaklar
              </Link>
              <Link
                href="/shop"
                className="font-medium text-white hover:text-primary transition-colors"
              >
                Do&apos;kon
              </Link>
            </div>
            {/* O'ngda user ismi va avatar */}
            <div className="flex items-center gap-3">
              <span className="font-medium text-white">{userName}</span>
              <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center">
                <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-black font-bold text-lg">
                  {userName.charAt(0)}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
