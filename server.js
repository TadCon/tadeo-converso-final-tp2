import express from "express";
import PORT from "./config.js";
import Router from "./routes/Router.js";

class Server {
  constructor() {
    this.app = express();
    this.port = PORT;
    this.router = new Router();
  }

  start() {
    /* EXPRESS CONFIG */
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));

    /* ROUTES */
    this.app.use("/api/palabras", this.router.start());

    /* SERVER */
    this.server = this.app.listen(PORT, () =>
      console.log(
        `Servidor http express escuchando en http://localhost:${PORT}`
      )
    );

    this.server.on("error", (error) =>
      console.log(`Error en el servidor: ${error.message}`)
    );

    return this.app;
  }

  stop() {
    this.server.close();
  }
}

export default Server;
