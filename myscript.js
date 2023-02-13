const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      tasks: ["accendi il pc", "studia Vue", "spegni il pc", "accendi la play"],
      newTask: "",
    };
  },

  methods: {
    removeTask(i) {
      this.tasks.splice(i, 1);
    },
  },
});

app.mount("#app");
