<template>
  <div class="row">
    <div class="col">
      <AddTodo />
      <ul class="list-group w-100 mb-4">
        <TodoItem
          v-for="todo in allTodos"
          :key="todo.id"
          :id="todo.id"
          :title="todo.title"
          :completed="todo.completed"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

export default {
  name: "Todos",
  components: {
    AddTodo,
    TodoItem
  },
  methods: {
    // register a global function from a module
    ...mapActions(["fetchTodos"])
  },
  computed: {
    // get data from component
    ...mapGetters(["allTodos"])
  },
  created() {
    this.fetchTodos();
  }
};
</script>

<style>
.todos {
  display: flex;
  flex-wrap: wrap;
}
</style>
