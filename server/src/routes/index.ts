import { Router } from "express";
import { healthRouter } from "./health.routes";
import { resourceRouter } from "./resource.routes";
import { contactRouter } from "./contact.routes";

export const apiRouter = Router();

apiRouter.use(healthRouter);
apiRouter.use(resourceRouter);
apiRouter.use(contactRouter);
