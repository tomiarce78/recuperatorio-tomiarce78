const {
  sumarValores,
  modifyAlumno,
  encontrarNumerosPares
} = require('../index');


// Pruebas para encontrarNumerosPares
describe("Ejercicio 1: encontrarNumerosPares", () => {
  it("debe encontrar números pares en un array correctamente", () => {
    expect(encontrarNumerosPares([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
  });

  it("debe manejar un array vacío correctamente", () => {
    expect(encontrarNumerosPares([])).toEqual([]);
  });

  it("debe manejar un array sin números pares correctamente", () => {
    expect(encontrarNumerosPares([1, 3, 5])).toEqual([]);
  });
});

describe('Actividad N°2: multiplicarValores', () => {
  test('Multiplicar valores en arrays multidimensionales', () => {
    const array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    const resultado = sumarValores(array);
    expect(resultado).toEqual([[6, 7, 8], [9, 10, 11], [12, 13, 14]]);
  });
});

// Pruebas para modifyAlumno
describe('modifyAlumno', () => {
  it('debe devolver un objeto con la estructura correcta', () => {
    const alumno = {
    nombre: "Carlos",
    color: "Rojo",
    mate: "amargo",
    anios: true,
    peliculas: [ "ESDLA", "Harry Potter", "IT", "Iron Man"]
    };

    const resultado = modifyAlumno(alumno);

    expect(resultado).toEqual(expect.objectContaining({
      edad: expect.any(Number),
      direccion: expect.any(String),
      hobbies: expect.arrayContaining([expect.any(String)]),
      juegoFavorito: expect.objectContaining({
        genero: expect.any(String),
        nombre: expect.any(String)
      }),
      estudia: expect.any(Boolean)
    }));
  });
});