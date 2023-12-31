import express from "express";
import {
  addRemoveFav,
  allFavourites,
  bookVisit,
  cancelBooking,
  createUser,
  getallbookings,
} from "../controllers/userController.js";
// import jwtCheck from "../config/auth0Config.js";

const router = express.Router();

// router.post("/register", jwtCheck, createUser);
// can't use jwtCheck because some browsers blocked it

router.post("/register", createUser);
router.post("/bookVisit/:id", bookVisit);
router.post("/allBookings", getallbookings);
router.post("/cancelBooking/:id", cancelBooking);
router.post("/toFav/:rid", addRemoveFav);
router.post("/allFav", allFavourites);

export { router as userRoute };
