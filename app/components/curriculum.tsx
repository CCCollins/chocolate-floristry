"use client";

import { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const initialCurriculum = [
  {
    id: "module1",
    title: "Основы кондитерского дела",
    lessons: [
      {
        title: "Основы приготовления теста",
        description: "Изучите различные виды теста и их применение",
      },
      {
        title: "Кремы и начинки",
        description: "Научитесь готовить кремы различных вкусов",
      },
      {
        title: "Укладка и выравнивание тортов",
        description: "Научитесь выравнивать и укладывать тортовые слои",
      },
      {
        title: "Основы декорирования",
        description: "Освойте основы нанесения крема и простых узоров",
      },
    ],
  },
  {
    id: "module2",
    title: "и так далее",
    lessons: [
      {
        title: "test",
        description: "...",
      },
    ],
  },
];

export default function Curriculum() {
  const [curriculum, setCurriculum] = useState(initialCurriculum);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setCurriculum(initialCurriculum);
  }, []);

  if (!isClient) return null;

  return (
    <section id="curriculum" className="w-full py-12 bg-pink-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-white px-3 py-1 text-sm text-rose-700">Расписание курса</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-rose-800">Чему вы научитесь</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Наши тщательно структурированные уроки помогут вам освоить базовые техники и создать потрясающие кондитерские шедевры
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl py-12">
          <Tabs defaultValue="module1" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-pink-100 text-rose-700">
              {curriculum.map((module) => (
                <TabsTrigger
                  key={module.id}
                  value={module.id}
                  className="data-[state=active]:bg-white data-[state=active]:text-rose-800"
                >
                  {module.id.replace("module", "Модуль ")}
                </TabsTrigger>
              ))}
            </TabsList>
            {curriculum.map((module) => (
              <TabsContent key={module.id} value={module.id} className="mt-6 space-y-4">
                <h3 className="text-xl font-bold text-rose-700">{module.title}</h3>
                <ul className="space-y-2">
                  {module.lessons.map((lesson, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-rose-500 mt-0.5" />
                      <div>
                        <p className="font-medium">{lesson.title}</p>
                        <p className="text-sm text-muted-foreground">{lesson.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}

