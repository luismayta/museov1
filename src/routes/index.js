const express = require("express");
const router = express.Router();
const controllers = require("../handlers/usuario.js");

//routes usuario
router.route("/gettodo").get(controllers.getAllTodos);
router.route("/createTodo").post(controllers.createTodo);
router.route("/get").get(controllers.getTodo);
router.route("/put").put(controllers.updateTodo);
router.route("/delete").delete(controllers.deleteTodo);
module.exports = router;
