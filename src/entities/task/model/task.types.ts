export type Task = {         
  id: string;                 
  title: string;              
  done: boolean;             
};

/*

export

Hace que el símbolo que declaras (aquí, Task) sea visible fuera de este archivo.

Permite import { Task } from "./ruta" en otros módulos.

type

Inicia una type alias (alias de tipo).

No crea código en tiempo de ejecución; solo existe en tiempo de compilación para chequeo estático.

Alternativa a interface para describir la forma de un objeto, uniones, intersecciones, etc.

Task

Nombre del tipo (alias). Por convención: PascalCase para tipos.

Representa la “forma”/contrato de una tarea en tu dominio.

=

Asigna el alias Task a la forma (objeto) que viene entre llaves.

{ ... }

Delimita un Object Type Literal: describe las propiedades requeridas y sus tipos.

Propiedades internas

id: string;

Propiedad obligatoria id.

Tipo string.

El ; termina la property signature (puede ser ; o ,, por estilo).

title: string;

Propiedad obligatoria title.

Tipo string.

done: boolean;

Propiedad obligatoria done.

Tipo boolean (primitivo).

}

Cierra la definición del tipo objeto.

*/

