import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#F2EFE6] text-black">
      <div className="w-full px-10 py-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company info */}
          <div className="flex items-center space-x-4 pl-10">
            <Image src="/logo.png" alt="Style" width={200} height={200} />
            <Image src="/StylePick AI.png" alt="Style" width={200} height={200} />
          </div>

            {/* Navigation links */}
            <div className="text-center sm:text-left text-[#000000]">
              <h3 className="text-2xl font-bold mb-4 py-6">Menyu</h3>
              <ul className="grid grid-cols-2 gap-2 justify-center sm:justify-start">
              <li>
                <Link
                href="/#home"
                className="hover:text-blue-200 transition-colors"
                >
                Bosh sahifa
                </Link>
              </li>
              <li>
                <Link
                href="/women"
                className="hover:text-blue-200 transition-colors"
                >
                Ayollar
                </Link>
              </li>
              <li>
                <Link
                href="/men"
                className="hover:text-blue-200 transition-colors"
                >
                Erkaklar
                </Link>
              </li>
              <li>
                <Link
                href="/shop"
                className="hover:text-blue-200 transition-colors"
                >
                Do&apos;kon
                </Link>
              </li>
              </ul>
            </div>
            {/* Contact */}
            <div className="text-center sm:text-left text-[#000000]">
              <h3 className="text-2xl font-bold mb-4 py-6">Kontaktlar</h3>
              <ul className="flex flex-col gap-2 justify-center sm:justify-start">
              <li>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+998 33 678 0411</span>
            </div>
              </li>
              <li>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>roziyabonuabdumalikova@gmail.com</span>
            </div>
              </li>
              </ul>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
