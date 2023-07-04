import ModelMem from "../model/ModelMem.js";

class Service {
  constructor() {
    this.model = new ModelMem();
  }

  //Validación de la palabra ingresada
  validarPalabra(palabra) {
    if (!palabra || palabra.trim() === "") {
      throw new Error("La palabra está vacía");
    }

    if (!/^[a-zA-Z]+$/.test(palabra)) {
      throw new Error("La palabra contiene caracteres no alfabéticos");
    }
  }

  async obtenerPalabras() {
    const palabras = await this.model.obtenerPalabras();
    return palabras.join(" ");
  }

  async guardarPalabra(palabra) {
    this.validarPalabra(palabra);
    return await this.model.guardarPalabra(palabra);
  }

  async borrarPalabra(palabra) {
    this.validarPalabra(palabra);

    return await this.model.borrarPalabra(palabra);
  }

  async contarPalabras() {
    const palabras = await this.model.contarPalabras();
    const cantidadDePalabrasIngresadas =
      await this.model.cantidadDePalabrasIngresadas();
    const contador = {
      cantidadDePalabrasIngresadas: cantidadDePalabrasIngresadas,
    };

    palabras.forEach((palabra) => {
      if (contador[palabra]) {
        contador[palabra]++;
      } else {
        contador[palabra] = 1;
      }
    });

    return contador;
  }
}

export default Service;
