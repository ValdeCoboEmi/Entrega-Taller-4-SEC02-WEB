// simulando la base de datos
const integrantes = [
  {
    carnet: '00003925',
    ciudad: 'San Salvador',
    carrera: 'Ingeniería Informática',
    proyectosRealizados: 4
  },
  {
    carnet: '00003525',
    ciudad: 'San Salvador',
    carrera: 'Ingeniería Informática',
    proyectosRealizados: 10
  },
];

function getIntegrantes() {
  return integrantes;
}

module.exports = { getIntegrantes };
