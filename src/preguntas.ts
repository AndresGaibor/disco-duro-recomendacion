// preguntas para un usuario final para seleccionar un disco duro HDD o SSD,
// interno o externo
// de laptop o pc

const preguntas = [];

const opt = {
  precio_max: -1,
  capacidad: -1,
  tipo: "HDD",
  formFactor: "Laptop",
};

preguntas.push({
  id: 1,
  titulo: "Cual es tu presupuesto?",
  respuesta: null,
  opciones: [
    {
      titulo: "menos de 50",
      select: () => (opt.precio_max = 50),
    },
    {
      titulo: "entre 50 y 100",
      select: () => (opt.precio_max = 100),
    },
    {
      titulo: "mas de 100",
      select: () => (opt.precio_max = 500),
    },
    {
      titulo: "no importa",
      select: () => (opt.precio_max = -1),
    },
  ],
});

preguntas.push({
  id: 4,
  titulo: "En que trabajas?",
  opciones: ["Edicion de video", "Ofimatica", "Programacion", "Otro"],
  // depende de la opcion 0 del la pregunta id 3
  dependeDe: {
    pregunta: 3,
    opcion: 0,
  },
});

export { preguntas, opt };
