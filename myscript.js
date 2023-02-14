const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      todoList: [
        { text: "accendi il pc", done: false },
        { text: "studia Vue", done: true },
        { text: "spegni il pc", done: false },
      ],

      newTask: {
        text: "",
        done: false,
      },
    };
  },

  methods: {
    // addTask() {
    //   this.tasks.push(this.newTask);
    // },

    // removeTask(i) {
    //   this.tasks.splice(i, 1);
    // },
    removeTodo(index) {
      this.todoList.splice(index, 1);
    },
    addTodo() {
      const newTodoCopy = {
        // text: this.newTask.text,
        // done: false,
        ...this.newTask,
      };
      this.todoList.push(newTodoCopy);
      this.newTask.text = "";
    },
    // todoDone(todo) {
    //   todo.done = !todo.done;
    // },
  },
});

app.mount("#app");
