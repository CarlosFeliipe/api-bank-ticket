import express from "express";
import errorHandler from "./middleware/error-handler";
import router from "./router";
import swagger from "swagger-ui-express";
import swaggerDocs from "./swagger/swagger.json";

const app = express();

app.use(express.json());
app.use(router);

app.use("/documentacion", swagger.serve, swagger.setup(swaggerDocs));

app.use(errorHandler);

export default app;
