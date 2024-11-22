import express from "express"
import { shouldBeAdmin } from "../controllers/test.controller.js";
import { shouldBeLoggedIn } from "../controllers/test.controller.js";
const router = express.Router();

router.get("/should-be-logged-in",shouldBeLoggedIn);
router.get("/should-be-admin",shouldBeAdmin);

export default router;