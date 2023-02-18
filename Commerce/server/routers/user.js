const router = require("express").Router();
const { user } = require("../controllers/index");
const { verifyToken } = require("../middleware/user");

router.post("/create", user.create);
router.post("/verification", verifyToken, user.verification);
router.post("/changeOtp", user.otp);

module.exports = router;
