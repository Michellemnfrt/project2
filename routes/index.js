// const express = require("express");
// const router = express.Router();
// const applicationController = require("../controllers/index.js");

// router.get("/", applicationController.index);

// // router.get("/", require("applicationController.index"));
// router.use("/artist", require("./artist"));
// router.use("/songs", require("./songs"));
// router.use("/user", require("./user"));
// // router.post("/user", require("./user"));

// router.all("*", (req, res) => {
//   res.status(400).send();
// });

// module.exports = router;
const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});

router.use("/", require("./application.js"));
router.use("/user", require("./user"));
router.use("/song", require("./song"));
router.post("/user", require("./user"));

router.all("*", (req, res) => {
  res.status(400).send();
});

module.exports = router;
