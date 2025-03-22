"use client";

import { useState } from "react";
import Link from "next/link";
import { Cake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IoMenu, IoClose } from "react-icons/io5";

interface HeaderProps {
  onOpenModal: () => void;
}

export default function Header({ onOpenModal }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Cake className="h-6 w-6 text-rose-500" />
          <span className="text-xl font-bold text-rose-700">Кондитерская СофиКо</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
            Особенности
          </Link>
          <Link href="#curriculum" className="text-sm font-medium hover:underline underline-offset-4">
            Содержание курса
          </Link>
          <Link href="#instructor" className="text-sm font-medium hover:underline underline-offset-4">
            Преподаватель
          </Link>
          <Link href="#pricing" className="text-sm font-medium hover:underline underline-offset-4">
            Цены
          </Link>
        </nav>
        <div className="hidden md:block">
          <Button className="bg-rose-600 hover:bg-rose-700" onClick={onOpenModal}>
            Записаться на курс
          </Button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-rose-700">
            {menuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-background border-t">
          <nav className="flex flex-col items-center gap-4 py-4">
            <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
              Особенности
            </Link>
            <Link href="#curriculum" className="text-sm font-medium hover:underline underline-offset-4">
              Содержание курса
            </Link>
            <Link href="#instructor" className="text-sm font-medium hover:underline underline-offset-4">
              Преподаватель
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:underline underline-offset-4">
              Цены
            </Link>
            <Button className="bg-rose-600 hover:bg-rose-700" onClick={onOpenModal}>
              Записаться на курс
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}