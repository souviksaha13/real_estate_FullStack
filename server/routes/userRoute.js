import express from "express";
import {
  addRemoveFav,
  allFavourites,
  bookVisit,
  cancelBooking,
  createUser,
  getallbookings,
} from "../controllers/userController.js";
import jwtCheck from "../config/auth0Config.js";

const router = express.Router();

router.post("/register",jwtCheck, createUser);
router.post("/bookVisit/:id", bookVisit);
router.get("/allBookings", getallbookings);
router.post("/cancelBooking/:id", cancelBooking);
router.post("/toFav/:rid", addRemoveFav);
router.get("/allFavourites", allFavourites);

export { router as userRoute };
