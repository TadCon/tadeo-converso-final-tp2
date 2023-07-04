import { expect } from "chai";
import supertest from "supertest";
import Server from "../server.js";

//NOTE - Test interno. El servidor NO debe estar levantado para realizar este test.
describe("Test API REST ful: Test Interno", () => {
  describe("GET", () => {
    it("Debería retornar un status 200", async () => {
      const server = new Server();
      const app = await server.start();

      const request = supertest(app);
      const response = await request.get("/api/palabras");

      expect(response.status).to.eql(200);

      await server.stop();
    });
  });

  describe("POST", () => {
    it("Debería agregar un usuario", async () => {
      const server = new Server();
      const app = await server.start();

      const request = supertest(app);

      const palabra = { palabra: "Texto" };

      const response = await request.post("/api/palabras").send(palabra);
      expect(response.status).to.eql(200);

      await server.stop();
    });
  });
});
