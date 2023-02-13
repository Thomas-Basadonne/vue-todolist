const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      tasks: ["studia", "fai allenamento", "Accendi la play"],
      //   [
      //     { title: "accendi il pc", done: "true" },
      //     { title: "studia Vue", done: "true" },
      //     { title: "spegni il pc", done: "true" },
      //   ],

      newTask: "",
    };
  },

  methods: {
    addTask() {
      this.tasks.push(this.newTask);
    },

    removeTask(i) {
      this.tasks.splice(i, 1);
    },
  },
});

app.mount("#app");
