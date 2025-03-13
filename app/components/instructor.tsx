"use client";

import Image from "next/image"

export default function Instructor() {
  return (
    <section id="instructor" className="w-full py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative w-64 h-64 overflow-hidden rounded-full border-4 border-pink-200">
              <Image
                src="/images/instructor.png"
                width={256}
                height={256}
                alt="Софья Кобзева"
                className="object-cover transform scale-x-[-1]"
              />
            </div>
          </div>
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-pink-100 px-3 py-1 text-sm text-rose-700">Ваш наставник</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-rose-800">Софья Кобзева</h2>
            <p className="text-xl font-medium text-rose-600">Большой начальник, руководитель, технолог!</p>
            <p className="text-muted-foreground">
              У меня все делается к лучшему!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

