const res = require("express/lib/response");
const { db } = require("../db/db");

class TodoController {
  async getAllTodos() {
    const todos = await db("todos").select("*");
    return todos;
  }

  async createTodo(todo) {
    const createdTodo = await db("todos")
      .insert({
        description: todo.description,
        completed: false,
      })
      .returning("*");
    const updatedTodos = await db("todos").select("*");
    return { createdTodo, updatedTodos };
  }

  async updateTodo(todo) {
    const updatedTodo = await db("todos")
      .where("id", todo.id)
      .update({
        description: todo.description,
        completed: todo.completed ?? false,
      })
      .returning("*");
    const updatedTodos = await db("todos").select("*");
    return { updatedTodo, updatedTodos };
  }

  async deleteTodo({ id }) {
    const deletedTodo = await db("todos").where("id", id).del().returning("*");
    const updatedTodos = await db("todos").select("*");
    return { deletedTodo, updatedTodos };
  }
}

module.exports = new TodoController();
