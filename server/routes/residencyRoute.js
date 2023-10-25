import express from "express";
import {
  createResidency,
  getAllResidencies,
  getResidency,
} from "../controllers/residencyController.js";
const router = express.Router();

router.post("/create", createResidency);
router.get("/allresidencies", getAllResidencies);
router.get("/:id", getResidency);

export { router as residencyRoute };
