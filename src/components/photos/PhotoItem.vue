<template>
  <div class="card">
    <img :src="url" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <a href="#" class="btn btn-outline-primary">Go somewhere</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "PhotoItem",
  props: {
    title: String,
    url: String
  }
};
</script>