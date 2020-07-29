<template> </template>

<script>
export default {
  name: "EmployeeFilterCategory",
  data: function() {
    return {
      selected: [],
    };
  },
  methods: {
    upstreamSelected() {
      // console.log(this.selected);
      this.$emit("selectedOptions", this.selected);
    },
  },
  props: {
    title: String,
    filterOptions: Array,
  },
};
</script>

<style></style>
