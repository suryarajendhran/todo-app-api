const express = require("express");
const TodoController = require("../controllers/TodoController");

const router = express.Router();

router.get("/", async (req, res) => {
  res.status(200).json(await TodoController.getAllTodos());
});
router.post("/", async (req, res) => {
  res.status(200).json(await TodoController.createTodo(req.body));
});
router.delete("/completed", async (req, res) => {
  res.status(200).json(await TodoController.clearCompletedTodos());
})
router.put("/", async (req, res) => {
  res.status(200).json(await TodoController.updateTodo(req.body));
});
router.delete("/", async (req, res) => {
  res.status(200).json(await TodoController.deleteTodo(req.body));
})

module.exports = router;
