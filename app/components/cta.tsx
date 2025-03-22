"use client";

import { Button } from "@/components/ui/button";

interface CTAProps {
  onOpenModal: () => void;
}

export default function CTA({ onOpenModal }: CTAProps) {
  return (
    <section className="w-full py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-rose-800">
              Готовы создавать потрясающие десерты?
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Присоединяйтесь к нашему курсу и начните создавать потрясающие десерты уже сегодня!
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button size="lg" className="bg-rose-600 hover:bg-rose-700" onClick={onOpenModal}>
              Записаться сейчас
            </Button>
            <Button variant="outline" className="border-rose-300 text-rose-700 hover:bg-rose-50" size="lg">
              Скачать прьевью курса
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Ограниченное предложение: скидка на обучение 10% до первого мая!
          </p>
        </div>
      </div>
    </section>
  );
}