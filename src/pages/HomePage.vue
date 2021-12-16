<template>
  <div class="home-page">
    <CreateTodo @todo-created="onTodoCreated" />
    <div class="separator"><hr /></div>
    <ul class="todo-list">
      <li
        v-for="todoItem in todoList"
        :key="todoItem.id"
        class="todo-item"
        :class="{ done: todoItem.isCompleted }"
      >
        <div class="title">
          {{ todoItem.title }}
        </div>
        <div class="actions">
          <input
            type="checkbox"
            class="checkbox"
            :checked="todoItem.isCompleted"
            @input="onCheckBoxInput(todoItem.id, todoItem.isCompleted)"
          />
          <button @click="onDeleteTodo(todoItem.id)" class="delete-btn">x</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import CreateTodo from "@/components/CreateTodo";
import { fetchTodoList, patchTodo, deleteTodo } from "@/netClient/todoService";

export default {
  name: "HomePage",
  components: {
    CreateTodo,
  },
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
    async onCheckBoxInput(id, isCompleted) {
      try {
        await patchTodo({ id, isCompleted: !isCompleted });
        this.fetchTodoList();
      } catch (error) {
        console.error({ error });
      }
    },
    async onDeleteTodo(id) {
      try {
        await deleteTodo({ id });
        this.fetchTodoList();
      } catch (error) {
        console.error({ error });
      }
    },
  },
};
</script>
