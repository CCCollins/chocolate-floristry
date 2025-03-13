"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqItems = [
  {
    question: "Нужен ли опыт для прохождения курса?",
    answer:
      "Нет, наш курс подходит как для начинающих, так и для опытных кондитеров. Мы начинаем с основ и постепенно переходим к более сложным техникам.",
  },
  {
    question: "Какие приборы мне понадобятся?",
    answer:
      "Для прохождения курса вам понадобятся стандартные кухонные приборы, такие как миксер, формы для выпечки и декорирования, весы и прочее. Полный список приборов вы найдете в описании курса.",
  },
  {
    question: "Могу ли я начать свой бизнес после прохождения курса?",
    answer:
      "Начать свой бизнес после прохождения курса абсолютно реально. Мы даже расскажем вам, как продвигать свои десерты и привлекать клиентов.",
  },
  {
    question: "Что делать, если у меня возникли вопросы?",
    answer:
      "Вы всегда можете обратиться к нам, наши контакты указаны в группе ВК. Мы с удовольствием поможем вам разобраться с любыми вопросами, связанными с курсом.",
  },
  {
    question: "Могу ли я получить возврат, если курс мне не подойдет?",
    answer:
      "У нас действует гарантия возврата в течение 7 дней с момента оплаты. Если курс вам не подойдет, вы можете вернуть деньги, не задавая лишних вопросов.",
  },
]

export default function FAQ() {
  return (
    <section className="w-full py-12 bg-pink-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-white px-3 py-1 text-sm text-rose-700">ЧаВо</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-rose-800">
              Часто задаваемые вопросы
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Найдите ответы на самые популярные вопросы о нашем курсе.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl py-12">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger className="text-rose-800 text-left">{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

