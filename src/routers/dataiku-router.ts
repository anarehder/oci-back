import { Router } from "express";
import multer from "multer";
import { get5Lpredict } from "../controllers";

const upload = multer({ dest: "uploads/" });

const dataikuRouter = Router();
dataikuRouter.post("/", upload.single("image"), get5Lpredict);

export {dataikuRouter}