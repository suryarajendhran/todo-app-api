const express = require("express");
const {
  getAllTodos,
  createTodo,
  updateTodo,
} = require("../controllers/TodoController");

const router = express.Router();

router.get("/", async (req, res) => {
  const todos = await getAllTodos();
  res.status(200).json(todos);
});
router.post("/", async (req, res) => {
  const todo = await createTodo(req.body);
  res.status(200).json(todo);
});
router.put("/", async (req, res) => {
  const updatedTodo = await updateTodo(req.body);
  res.status(200).json(updatedTodo);
});

module.exports = router;
