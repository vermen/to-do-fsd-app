"use client";                           // Next.js: componente de cliente (usa estado/eventos del navegador)

import { useState } from "react";        // Hook de React para estado local
import { Task } from "@/entities/task";  // Tipo de dominio (sugerencia: `import type { Task } ...` para type-only)
import { AddTaskForm } from "@/features/add-task"; // Feature que emite la intención de añadir tarea

export function TaskList() {             // Widget/página que orquesta formulario + lista
  const [tasks, setTasks] = useState<Task[]>([]); // Estado: array tipado de tareas

  const addTask = (title: string) => {   // Callback recibido por la feature
    setTasks((prev) => [                 // Actualiza inmutable: crea nuevo array
      ...prev,                           // conserva tareas anteriores
      { id: Date.now().toString(),       // id simple (demo); en prod usa uuid/servidor
        title,                           // título desde el formulario
        done: false },                   // nueva tarea comienza pendiente
    ]);
  };

  return (
    <div>
      <AddTaskForm onAdd={addTask} />    {/* Conecta la feature: al enviar, llama addTask */}
      <ul>
        {tasks.map((t) => (              // Renderiza cada tarea
          <li key={t.id}>{t.title}</li>  // Usa id como key; muestra el título
        ))}
      </ul>
    </div>
  );
}
