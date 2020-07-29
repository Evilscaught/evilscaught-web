<template>
  <form v-on:submit="onSubmit">
    <div class="form-row align-items-center">
      <div class="col-12 col-md-auto mb-4">
        <input v-model="newTodoTitle" type="text" placeholder="Add new Todo" class="form-control" />
      </div>
      <div class="col-12 col-md-auto mb-4">
        <div class="custom-control custom-switch">
          <input
            type="checkbox"
            v-model="newTodoIsCompleted"
            class="custom-control-input"
            id="customSwitch1"
          />
          <label class="custom-control-label" for="customSwitch1">Completed?</label>
        </div>
      </div>
      <div class="col-12 col-md-auto mb-4 d-flex align-items-center">
        <button class="btn btn-outline-primary">
          <span class="btn-text">Add</span>
          <PlusIcon size="1x" />
        </button>
      </div>
      <div v-if="getNewTodoStatus.length > 0" class="col-12 col-md-auto mb-4 status">
        <div
          v-if="getNewTodoStatus === 'loading'"
          class="spinner-border text-primary ml-4"
          role="status"
        >
          <span class="sr-only">Loading...</span>
        </div>
        <CheckIcon size="2.2x" v-if="getNewTodoStatus === 'done'" class="text-primary" />
      </div>
    </div>
  </form>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { PlusIcon, CheckIcon } from "vue-feather-icons";

export default {
  name: "NewTodo",
  data: function() {
    return {
      newTodoTitle: "",
      newTodoIsCompleted: false
    };
  },
  components: {
    PlusIcon,
    CheckIcon
  },
  methods: {
    ...mapActions(["addTodo"]),

    onSubmit(e) {
      e.preventDefault();
      this.addTodo({
        title: this.newTodoTitle,
        completed: this.newTodoIsCompleted
      });

      this.newTodoTitle = "";
    }
  },
  computed: {
    ...mapGetters(["getNewTodoStatus"])
  }
};
</script>

<style lang="scss" scoped>
.status {
  margin-left: auto;
}
</style>