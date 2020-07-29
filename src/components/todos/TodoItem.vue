<template>
  <li class="list-group-item">
    <div class="text">
      {{ id }} -
      {{ title }} -
      {{ completed }}
    </div>
    <DeleteTodo :deleteId="id" />
  </li>
</template>

<script>
import DeleteTodo from "./DeleteTodo";

export default {
  name: "TodoItem",
  props: {
    id: Number,
    title: String,
    completed: Boolean
  },
  components: {
    DeleteTodo
  }
};
</script>

<style lang="scss" scoped>
.list-group-item {
  display: flex;
  align-items: center;
}

.text {
  flex: 1;
  padding-right: 20px;
}
</style>
