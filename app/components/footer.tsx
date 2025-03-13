"use client";

import Link from "next/link";
import { Cake } from "lucide-react";
import { SiVk } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white">
      <div className="container flex flex-col items-center justify-between gap-4 py-8 md:flex-row md:py-6">
        {/* Логотип и копирайт */}
        <div className="flex items-center gap-2">
          <Cake className="h-6 w-6 text-rose-500" />
          <p className="text-sm text-gray-600">&copy; 2025 СофиКо. Все права защищены.</p>
        </div>

        {/* Социальные сети */}
        <div className="flex gap-4 md:ml-auto mt-4 md:mt-0">
          <Link
            href="https://vk.com/sofiko101002"
            target="_blank"
            className="p-2 rounded-full bg-blue-500 text-white transition hover:bg-rose-400"
          >
            <SiVk className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
