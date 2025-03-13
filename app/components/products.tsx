"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { Card, CardContent } from "@/components/ui/card";

const initialProducts = [
  {
    name: "Пион из шоколада",
    description: "Пион из шоколада станет незабываемым подарком для вашей второй половинки, друга или родного человека.",
    image: "/images/chocolate-pion.jpg",
    link: "https://vk.com/market/product/pion-iz-shokolada-224588879-12847223",
  },
  {
    name: "Гвоздика из шоколада",
    description: "Наши гвоздики идеально подойдут для любого праздника. Подарите своим близким или коллегам радость и вкусные эмоции.",
    image: "/images/chocolate-carnation.jpg",
    link: "https://vk.com/market/product/gvozdika-iz-shokolada-224588879-12834320",
  },
  {
    name: "Веточка яблони",
    description: "Представь себе: веточка яблони из шоколада, сверкающая на солнце, словно настоящий подарок от природы.",
    image: "/images/apple-tree-branch.jpg",
    link: "https://vk.com/market/product/vetochka-yabloni-224588879-12834317",
  },
  {
    name: "Роза из шоколада",
    description: "Хочешь порадовать близкого человека необычным подарком? Предлагаем вариант - роза из шоколада!",
    image: "/images/chocolate-rose.jpg",
    link: "https://vk.com/market/product/roza-iz-shokolada-224588879-12834315",
  },
  {
    name: "Пирожное «Павлова»",
    description: "Сочная и нежная \"юбочка\" из меренги, которая хрустит снаружи, а внутри тает легким кремом – настоящее воплощение нежности и вкуса.",
    image: "/images/pavlova-cake.jpg",
    link: "https://vk.com/market/product/pirozhnoe-pavlova-224588879-12834299",
  },
];

export default function ProductCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [products, setProducts] = useState(initialProducts);

  useEffect(() => {
    setProducts(initialProducts);
  }, []);

  useEffect(() => {
    if (!carouselRef.current) return;
    const carousel = carouselRef.current;

    const scroll = () => {
      if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
        carousel.scrollLeft = 0;
      } else {
        carousel.scrollBy({ left: 1, behavior: "smooth" });
      }
    };

    const interval = setInterval(scroll, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-16 bg-pink-50">
      <div className="container px-6">
        {/* Заголовок */}
        <div className="text-center space-y-3">
          <div className="inline-block bg-white px-4 py-1 rounded-full text-sm font-semibold text-rose-700 shadow">
            Наши изделия
          </div>
          <h2 className="text-3xl font-extrabold text-rose-800 md:text-4xl">
            Попробуйте сами изготовить наши вкусные изделия
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Мы предлагаем широкий ассортимент шоколадных изделий, которые подарят вам и вашим близким незабываемые вкусовые ощущения.
          </p>
        </div>

        {/* Карусель */}
        <div className="relative mt-10 max-w-4xl mx-auto">
          {/* Кнопка влево */}
          <button
            onClick={() => carouselRef.current?.scrollBy({ left: -320, behavior: "smooth" })}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 text-rose-700 hover:bg-rose-100 transition z-10"
          >
            <IoChevronBack size={24} />
          </button>

          {/* Карточки */}
          <div
            ref={carouselRef}
            className="flex overflow-x-auto scroll-smooth space-x-3 scrollbar-hide snap-x snap-mandatory py-4"
          >
            {products.map((product, index) => (
              <Card
                key={index}
                className="w-[280px] flex-shrink-0 snap-center flex flex-col items-center justify-center text-center transform transition-transform hover:scale-102 hover:shadow-lg duration-300 border border-rose-200 bg-white rounded-lg"
                style={{ userSelect: "none", pointerEvents: "none" }}
              >
                <CardContent className="p-4 flex flex-col items-center space-y-3">
                  <Image
                    src={product.image}
                    width={260}
                    height={160}
                    alt={product.name}
                    className="rounded-md object-cover"
                  />
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                    <p className="text-sm text-gray-600 max-w-[230px] mx-auto line-clamp-3">
                      {product.description}
                    </p>
                  </div>
                  <Link
                    href={product.link}
                    target="_blank"
                    className="mt-auto inline-block text-center text-white bg-rose-700 hover:bg-rose-800 px-4 py-2 rounded-full text-sm font-medium transition"
                    style={{ pointerEvents: "auto" }}
                  >
                    Подробнее
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Кнопка вправо */}
          <button
            onClick={() => carouselRef.current?.scrollBy({ left: 320, behavior: "smooth" })}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 text-rose-700 hover:bg-rose-100 transition z-10"
          >
            <IoChevronForward size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}