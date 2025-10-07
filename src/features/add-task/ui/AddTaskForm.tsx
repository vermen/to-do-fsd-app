"use client"; // Next.js: este componente usa estado/eventos del navegador (Client Component)

import { useState } from "react"; // Hook para estado local
import type { FormEvent, ChangeEvent } from "react"; // Import solo de tipos (no emite JS)

/** Props del componente: recibe un callback que recibe el título y no devuelve nada */
type AddTaskFormProps = {
  onAdd: (title: string) => void;
};

export function AddTaskForm({ onAdd }: AddTaskFormProps) {
  const [title, setTitle] = useState<string>(""); // Estado controlado del input

  /** Actualiza el estado con lo que escribe el usuario */
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  /** Evita recarga, valida, emite intención hacia arriba y limpia */
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = title.trim();
    if (!value) return;   // corta si está vacío o solo espacios
    onAdd(value);         // FSD: la feature emite la intención; otra capa decide qué hacer
    setTitle("");         // resetea el input
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">{/* layout horizontal con separación */}
      <input
        value={title}                    // input controlado (UI ↔ estado)
        onChange={handleChange}          // sincroniza con setTitle
        placeholder="Enter Task"         // pista para el usuario
        className="border p-2"           // estilos (Tailwind)
      />
      <button
        type="submit"                    // dispara onSubmit del <form>
        disabled={!title.trim()}         // desactiva si no hay texto válido
        className="bg-blue-500 text-white px-4 py-2" // estilos (Tailwind)
      >
        Add
      </button>
    </form>
  );
}
