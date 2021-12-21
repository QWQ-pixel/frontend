<template>
  <li class="todo-item" :class="{ done: todoItem.isCompleted }">
    <div class="title">
      {{ todoItem.title }}
    </div>
    <div class="actions">
      <input
        type="checkbox"
        class="checkbox"
        :checked="todoItem.isCompleted"
        @input="onCheckBoxInput"
      />
      <button @click="onDeleteTodo" class="delete-btn">
        x
      </button>
    </div>
  </li>
</template>
<script>
import { patchTodo, deleteTodo } from "@/netClient/todoService";

export default {
  name: "TodoItem",
  props: ["todoItem"],
  methods: {
    async onCheckBoxInput() {
      try {
        await patchTodo({ id: this.todoItem.id, isCompleted: !this.todoItem.isCompleted });
        this.$emit('todo-update')
      } catch (error) {
        console.error({ error });
      }
    },
    async onDeleteTodo() {
      try {
        await deleteTodo({ id: this.todoItem.id });
        this.$emit('todo-update')
      } catch (error) {
        console.error({ error });
      }
    },
  },
};
</script>
