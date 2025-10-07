import { TasksPage } from "@/pages-todo/tasks"; // Importa la página re-exportada (barrel). "@/": alias de paths en tsconfig

export default function TasksRoute() {          // Componente de ruta (archivo dentro de app/ o pages/)
  return <TasksPage />;                         {/* Delega el render a la página real (separa ruta de implementación) */}
}