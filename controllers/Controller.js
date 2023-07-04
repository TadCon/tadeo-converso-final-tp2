import Service from "../services/Service.js";

class Controller {
  constructor() {
    this.service = new Service();
  }

  obtenerPalabras = async (req, res) => {
    try {
      const palabras = await this.service.obtenerPalabras();

      res.status(200).send(palabras);
    } catch (error) {
      const errorMsg = "Error al obtener palabras";
      console.log(errorMsg, error);
      res.status(500).send(errorMsg);
    }
  };

  guardarPalabra = async (req, res) => {
    try {
      const { palabra } = req.body;
      const palabraGuardada = await this.service.guardarPalabra(palabra);

      res.status(200).json(palabraGuardada);
    } catch (error) {
      const errorMsg = "Error al guardar palabra";
      console.log(errorMsg, error);
      res.status(422).send(errorMsg);
    }
  };

  borrarPalabra = async (req, res) => {
    try {
      const { palabra } = req.body;
      const palabraBorrada = await this.service.borrarPalabra(palabra);

      if (palabraBorrada) {
        res.status(200).json(palabraBorrada);
      } else {
        res.status(404).send("La palabra no fue encontrada");
      }
    } catch (error) {
      const errorMsg = "Error al borrar palabra";
      console.log(errorMsg, error);
      res.status(500).send(errorMsg);
    }
  };

  contarPalabras = async (req, res) => {
    try {
      const palabras = await this.service.contarPalabras();

      res.status(200).send(palabras);
    } catch (error) {
      console.log("Error al obtener cantidad de palabras: ", error);
      res.status(500).send(errorMsg);
    }
  };
}

export default Controller;
