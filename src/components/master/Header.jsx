import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full h-16 bg-black sticky top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <span className="text-white text-4xl font-black">Codever</span>
        </div>
        <div className="flex items-center gap-2 text-white font-medium">
          <ul className="flex items-center gap-10">
            <li>
              <Link href="/">Anasayfa</Link>
            </li>
            <li>
              <Link href="/">Hakkımızda</Link>
            </li>
            <li>
              <Link href="/">Projelerimiz</Link>
            </li>
            <li>
              <Link href="/">İletişim</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
