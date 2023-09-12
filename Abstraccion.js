// Implementación de la abstracción
class Abstraccion {
  constructor(imp) {
    this.implementacion = imp;
  }

  operacion() {
    const resultado = this.implementacion.operacionImplementada();
    console.log(resultado);
  }
}

// Implementaciones concretas
class ImplementacionA {
  operacionImplementada() {
    return "Implementación A";
  }
}

class ImplementacionB {
  operacionImplementada() {
    return "Implementación B";
  }
}

// Uso del patrón Bridge
const implementacionA = new ImplementacionA();
const abstraccionA = new Abstraccion(implementacionA);
abstraccionA.operacion();

const implementacionB = new ImplementacionB();
const abstraccionB = new Abstraccion(implementacionB);
abstraccionB.operacion();