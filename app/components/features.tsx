"use client";

import { CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    title: "... видеоуроков",
    description: "Пошаговые видео-уроки, покрывающие разнообразные техники и рецепты шоколадной флористики.",
  },
  {
    title: "Практические проекты",
    description: "Создавайте потрясающие торты, пирожные и угощения, которые впечатлят вашу семью и друзей.",
  },
  {
    title: "Персональная обратная связь",
    description: "Отправляйте фотографии своих творений и получайте фидбек от экспертов.",
  },
  {
    title: "Поддерживающее сообщество",
    description: "Присоединяйтесь к нашему закрытому сообществу увлеченных кондитеров для вдохновения, поддержки и дружбы.",
  },
  {
    title: "Коллекция рецептов",
    description: "Получите доступ к нашей эксклюзивной коллекции рецептов, которые недоступны нигде больше.",
  },
  {
    title: "Сертификат о завершении",
    description: "Получите красивый сертификат, подтверждающий ваши кондитерские навыки и достижения.",
  },
]

export default function Features() {
  return (
    <section id="features" className="w-full py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-pink-100 px-3 py-1 text-sm text-rose-700">Особенности курса</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-rose-800">
              Создавайте шедевры кондитерского искусства
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
              Наш курс направлен на превращение вас из домашнего кондитера в художника
              кондитерского дела со всеми нужными знаниями и техниками
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-none">
              <CardContent className="p-6">
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-rose-500" />
                    <h3 className="font-bold text-rose-700">{feature.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

