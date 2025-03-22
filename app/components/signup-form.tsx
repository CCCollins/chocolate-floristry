"use client";

import { useState } from "react";

interface SignUpFormProps {
  onClose: () => void;
}

export default function SignUpForm({ onClose }: SignUpFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Сохранение данных в localStorage
    const signUpData = { name, email };
    localStorage.setItem("signUpData", JSON.stringify(signUpData));
    console.log("Form submitted successfully:", signUpData);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
      <div>
        <label htmlFor="name" className="block text-lg font-medium text-gray-700">
          Имя
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-2 block w-full rounded-md border-gray-600 shadow-sm focus:border-rose-500 focus:ring-rose-500 text-lg"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-lg font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-2 block w-full rounded-md border-gray-600 shadow-sm focus:border-rose-500 focus:ring-rose-500 text-lg"
          required
        />
      </div>
      <button type="submit" className="w-full bg-rose-600 hover:bg-rose-700 text-white py-3 px-4 rounded-md text-lg">
        Записаться
      </button>
    </form>
  );
}