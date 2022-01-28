const res = require("express/lib/response");
const { db } = require("../db/db");

class TodoController {
  async getAllTodos() {
    const todos = await db("todos").select(["id", "description", "completed"]);
    console.log(todos);
    return todos;
  }

  async createTodo(todo) {
    const [_todo] = await db("todos")
      .insert({
        description: todo.description,
        completed: false
      })
      .returning("*");
    return _todo;
  }

  async updateTodo(todo) {
    const updatedTodo = await db("todos").where("id", todo.id).update({
      description: todo.description,
      completed: todo.completed ?? false,
    }).returning('*');
    return updatedTodo;
  }
}

module.exports = new TodoController();
