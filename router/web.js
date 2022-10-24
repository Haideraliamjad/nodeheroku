import express from "express";
const router  = express.Router();
import webController from "../controller/webController.js";
router.get("/",webController.index);
router.get("/about",webController.about);
router.get("/contact",webController.contact); 
router.get("*",webController.notFind)
export default router;