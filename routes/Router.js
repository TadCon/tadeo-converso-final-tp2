import express from "express";
import Controller from "../controllers/Controller.js";

class Router {
  constructor() {
    this.router = express.Router();
    this.controller = new Controller();
  }

  start() {
    /* GET */
    this.router.get("/contar", this.controller.contarPalabras);
    this.router.get("/", this.controller.obtenerPalabras);

    /* POST */
    this.router.post("/", this.controller.guardarPalabra);

    /* DELETE */
    this.router.delete("/", this.controller.borrarPalabra);

    return this.router;
  }
}

export default Router;
