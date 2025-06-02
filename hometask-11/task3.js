async function fetchTodo() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const todo = await response.json();
      return todo;
    } catch (error) {
      console.error("Помилка при отриманні todo:", error);
    }
  }
  
  async function fetchUser() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
      const user = await response.json();
      return user;
    } catch (error) {
      console.error("Помилка при отриманні user:", error);
    }
  }
  
  async function processData() {
    try {
      const allResult = await Promise.all([fetchTodo(), fetchUser()]);
      console.log("Результат Promise.all:");
      console.log("Todo:", allResult[0]);
      console.log("User:", allResult[1]);
  
      const raceResult = await Promise.race([fetchTodo(), fetchUser()]);
      console.log("Результат Promise.race:", raceResult);
    } catch (error) {
      console.error("Помилка при обробці:", error);
    }
  }
  
  processData();  