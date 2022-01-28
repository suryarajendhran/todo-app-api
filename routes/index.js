const express = require("express");
const { getAllTodos, createTodo } = require("../controllers/TodoController");

const router = express.Router();

router.get("/", async (req, res) => {
  const todos = await getAllTodos();
  res.status(200).json(todos);
});
router.post("/", async (req, res) => {
  const todo = await createTodo(req.body);
  res.status(200).json(todo);
});

module.exports = router;
