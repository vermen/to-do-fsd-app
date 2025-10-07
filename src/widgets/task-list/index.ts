// Re-export (barrel) para exponer la API pública del widget desde su índice
export { TaskList } from "./ui/TaskList";
//   ^ export         : vuelve a exportar un símbolo definido en otro módulo
//     { TaskList }   : named export (debe existir con ese nombre en ./ui/TaskList)
//     from "..."     : ruta relativa al archivo fuente
//

