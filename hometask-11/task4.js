class TodoService {
    async fetchTodo() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const todo = await response.json();
        return todo;
      } catch (error) {
        console.error("Помилка при отриманні todo:", error);
      }
    }
  }
  
class UserService {
    async fetchUser() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const user = await response.json();
        return user;
      } catch (error) {
        console.error("Помилка при отриманні user:", error);
      }
    }
  }
  
async function run() {
    const todoService = new TodoService();
    const userService = new UserService();
  
    try {
      const allResults = await Promise.all([
        todoService.fetchTodo(),
        userService.fetchUser()
      ]);
      console.log("Результат Promise.all:");
      console.log("Todo:", allResults[0]);
      console.log("User:", allResults[1]);
  
      const raceResult = await Promise.race([
        todoService.fetchTodo(),
        userService.fetchUser()
      ]);
      console.log("Результат Promise.race:", raceResult);
    } catch (error) {
      console.error("Помилка при обробці:", error);
    }
  }
  
  run();
  