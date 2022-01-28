const express = require("express");
const {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/TodoController");

const router = express.Router();

router.get("/", async (req, res) => {
  res.status(200).json(await getAllTodos());
});
router.post("/", async (req, res) => {
  res.status(200).json(await createTodo(req.body));
});
router.put("/", async (req, res) => {
  res.status(200).json(await updateTodo(req.body));
});
router.delete("/", async (req, res) => {
  res.status(200).json(await deleteTodo(req.body));
})

module.exports = router;
