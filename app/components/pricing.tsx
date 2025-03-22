"use client";

import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const pricingPlans = [
  {
    name: "Самостоятельное обучение",
    price: "???",
    description: "Идеальный вариант для начинающих кондитеров, желающих освоить основы кондитерского дела.",
    features: [
      "Полный доступ к курсу",
      "35+ часов видеоуроков",
      "Скачиваемые рецепты",
      "Доступ к форуму сообщества",
      "6 месяцев обновлений",
    ],
    buttonText: "Начать обучение",
    buttonVariant: "outline",
    popular: false,
  },
  {
    name: "Обучение с наставником",
    price: "???",
    description: "Получите обратную связь на свои творения и задавайте вопросы преподавателю.",
    features: [
      "Все плюсы самостоятельного обучения",
      "Персональная обратная связь",
      "Ежемесячные живые сессии Q&A",
      "Приватное сообщество в Instagram",
      "Пожизненные обновления",
      "Бонусные сезонные рецепты",
    ],
    buttonText: "Записаться сейчас",
    buttonVariant: "default",
    popular: true,
  },
];

interface PricingProps {
  onOpenModal: () => void;
}

export default function Pricing({ onOpenModal }: PricingProps) {
  return (
    <section id="pricing" className="w-full py-16 bg-gray-50">
      <div className="container px-6">
        {/* Заголовок */}
        <div className="text-center space-y-4">
          <div className="inline-block rounded-full bg-pink-100 px-4 py-1 text-sm font-semibold text-rose-700">
            Тарифы
          </div>
          <h2 className="text-3xl font-extrabold text-rose-800 md:text-4xl">
            Инвестируйте в свои кондитерские навыки
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Выберите удобный для себя тариф и начните создавать потрясающие десерты уже сегодня!
          </p>
        </div>

        {/* Карточки тарифов */}
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`w-full max-w-sm flex flex-col items-center justify-center text-center shadow-md transition-all hover:shadow-lg ${
                plan.popular ? "border-rose-500" : "border-pink-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 rounded-bl-lg rounded-tr-md bg-rose-500 px-3 py-1 text-xs font-medium text-white">
                  Популярный
                </div>
              )}
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-rose-700">{plan.name}</h3>
                <div className="mt-2 flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-extrabold text-rose-800">{plan.price}</span>
                  <span className="text-gray-500">руб.</span>
                </div>
                <p className="mt-3 text-sm text-gray-600 max-w-[250px] mx-auto">{plan.description}</p>
                <ul className="mt-6 space-y-2 text-left">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-rose-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.buttonVariant === "default" ? "default" : "outline"}
                  className={`mt-6 w-full ${
                    plan.buttonVariant === "default"
                      ? "bg-rose-600 hover:bg-rose-700"
                      : "border-rose-300 text-rose-700 hover:bg-rose-50"
                  }`}
                  size="lg"
                  onClick={onOpenModal}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Гарантия возврата денег */}
        <div className="mx-auto max-w-lg mt-12 rounded-lg border border-pink-200 bg-pink-100/50 p-6 text-center">
          <p className="text-sm text-gray-600">
            Мы предоставляем 7-дневную гарантию возврата денег. Попробуйте курс без риска!
          </p>
        </div>
      </div>
    </section>
  );
}