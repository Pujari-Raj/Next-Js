import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <header className="bg-cyan-400 text-white text-black/80 flex items-center gap-5 py-4 px-5 text-sm">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/products">Products</Link>
        <Link href="/profile">Profile</Link>
      </header>
    </>
  );
};

export default Header;
