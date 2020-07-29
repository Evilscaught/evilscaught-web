<template>
  <button v-on:click="deleteTodo(deleteId)" class="btn btn-danger">
    <span class="btn-text">delete</span>
    <Trash2Icon size="1x" />
  </button>
</template>

<script>
import { mapActions } from "vuex";
import { Trash2Icon } from "vue-feather-icons";

export default {
  name: "DeleteTodo",
  props: {
    deleteId: Number
  },
  components: {
    Trash2Icon
  },
  methods: {
    ...mapActions(["deleteTodo"])
  }
};
</script>

<style lang="scss" scoped>
.btn-text {
  margin-right: 10px;

  @include media-breakpoint-down(xs) {
    display: none;
  }
}
</style>