class ModelMem {
  constructor() {
    this.palabras = ["Tadeo", "Texto", "de", "ejemplo", "repetido", "repetido"];
    this.palabrasIngresadas = 0;
  }

  guardarPalabra = async (palabra) => {
    try {
      this.palabras.push(palabra);
      this.palabrasIngresadas++;
      console.log("Se guardó la palabra: ", palabra);
      return palabra;
    } catch (error) {
      console.log("Error al guardar palabra: ", error);
      let palabra = {};
      return palabra;
    }
  };

  obtenerPalabras = async () => {
    try {
      return this.palabras;
    } catch (error) {
      console.log("Error al obtener todas las palabras: ", error);
      return [];
    }
  };

  borrarPalabra = async (palabra) => {
    try {
      if (this.palabras.includes(palabra)) {
        this.palabras = this.palabras.filter((p) => p !== palabra);
        console.log("Se borró la palabra: ", palabra);

        return palabra;
      } else {
        console.log("La palabra no existe");
        return null;
      }
    } catch (error) {
      console.log("Error al borrar palabra: ", error);
      return palabra;
    }
  };

  contarPalabras = async () => {
    try {
      return this.palabras;
    } catch (error) {
      console.log("Error al contar las palabras: ", error);
    }
  };

  cantidadDePalabrasIngresadas = async () => {
    try {
      return this.palabrasIngresadas;
    } catch (error) {
      console.log("Error al obtener la cantidad de palabras: ", error);
    }
  };
}

export default ModelMem;
