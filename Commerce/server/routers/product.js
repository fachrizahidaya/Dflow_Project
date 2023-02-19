const router = require("express").Router();
const { product } = require("../controllers/index");
const { multerUpload } = require("../middleware/multer");

router.post("/create", product.create);
router.post(
  "/single-uploaded/:id",
  multerUpload.single("file"),
  product.picture
);
router.get("/listAll", product.findAll);

module.exports = router;
