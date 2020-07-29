<template>
  <div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "EmployeeFilter",
  data: function() {
    return {
      isChecked: false
    };
  },
  props: {
    filter: String
  },
  methods: {
    checkChecked: function() {
      // console.log(this.isChecked);
      this.$emit("checkChecked", this.$props.filter);
    }
  }
};
</script>

<style>
</style>