"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className="w-full py-12 bg-pink-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-rose-200 px-3 py-1 text-sm text-rose-800">
              Специальное предложение - скидка 10% до первого мая!
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-rose-800">
              Курс по шоколадной флористике от практикующих кондитеров
            </h1>
            <p className="max-w-[600px] text-muted-foreground text-base md:text-xl">
              Мы — кондитерская СофиКо — создаём цветы из шоколада, неповторимые десерты и вкуснейшие торты.
              Запишитесь на наш курс и станьте мастером по шоколадной флористике!
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="bg-rose-600 hover:bg-rose-700" onClick={onOpenModal}>
                Записаться
              </Button>
              <Button variant="outline" className="border-rose-300 text-rose-700 hover:bg-rose-50" size="lg" asChild>
                <Link href="#curriculum">Содержание курса</Link>
              </Button>
            </div>
          </div>
          <div className="mx-auto w-full overflow-hidden">
            <Image
              src="/preview.png"
              width={800}
              height={500}
              alt="Группа ВКонтакте"
              className="object-cover w-full h-full rounded-xl mt-12"
              layout="responsive"
            />
            <div className="flex items-center gap-4 min-h-12 text-md">
              <p className="text-xs md:text-base">Подпишитесь на нашу группу ВКонтакте, чтобы заказать вкуснейшие изделия и получить бесплатные рецепты!</p>
              <Button size="sm" className="bg-rose-600 hover:bg-rose-700" asChild>
                <Link href="https://vk.com/sofiko101002" target="_blank">Подписаться</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}