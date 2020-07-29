<template>
  <div class="row">
    <div v-for="photo in allPhotos" :key="photo.id" class="col-12 col-sm-6 col-lg-4">
      <PhotoItem :title="photo.title" :url="photo.url" class="mb-4" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PhotoItem from "./PhotoItem";

export default {
  name: "Photos",
  components: {
    PhotoItem
  },
  methods: {
    ...mapActions(["fetchPhotos"])
  },
  computed: {
    ...mapGetters(["allPhotos"])
  },
  created() {
    this.fetchPhotos();
  }
};
</script>

<style></style>
