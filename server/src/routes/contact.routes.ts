import { Router } from "express";
import { postContact } from "../controllers/contact.controller";
import { asyncHandler } from "../utils/asyncHandler";

export const contactRouter = Router();

contactRouter.post("/contact", asyncHandler(postContact));
