import express from "express";
const router = express.Router();
import {
  GetAllProducts,
  GetAllProductsTesting,
} from "../controllers/api.controllers.js";

router.route("/products").get(GetAllProducts);

router.route("/products/:id").get(GetAllProducts);
// router.route("/products/category/:category").get(GetAllProducts);

router.route("/productsTesting").get(GetAllProductsTesting);
export default router;
