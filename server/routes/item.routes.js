const router = require('express').Router();
const itemController = require("../controllers/item.controller");

router.get("/", itemController.selectAllPosts);
router.post("/one",itemController.getOneUser);
router.get("/accounts",itemController.selectAllSignUps);
router.post("/signUp",itemController.createAccount);
router.put("/accountUpdate",itemController.updateAccount);
router.delete('/deleteAccount',itemController.deleteAccount);
router.post("/createPost",itemController.createPost);
router.put("/updatePost",itemController.updatePost);
router.delete("/deletePost",itemController.deletePost);

// router.post("/signIn",itemController.signIn)

module.exports = router;
