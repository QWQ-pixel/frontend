<template>
  <div class="home-page">
    <CreateTodo @todo-created="onTodoCreated" />
    <div class="separator"><hr /></div>
    <ul v-for="todoItem in todoList"
        :key="todoItem.id"  class="todo-list">
        <TodoItem :todoItem="todoItem" @todo-update="fetchTodoList"/>
    </ul>
  </div>
</template>

<script>
import CreateTodo from "@/components/CreateTodo";
import TodoItem from "@/components/TodoItem";
import { fetchTodoList } from "@/netClient/todoService";

export default {
  name: "HomePage",
  components: {
    CreateTodo,
    TodoItem,
  },
  props: ["todoItem"], 
  data: () => ({
    todoList: [],
  }),
  created() {
    this.fetchTodoList();
  },
  methods: {
    async fetchTodoList() {
      try {
        this.todoList = await fetchTodoList();
      } catch (error) {
        console.error({ error });
      }
    },
    onTodoCreated() {
      this.fetchTodoList();
    },
  },
};
</script>
