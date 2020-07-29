<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{name}}</h5>
      <div class="card-text">
        <b>Age:</b>
        {{age}}
        <br />
        <b>City:</b>
        {{city}}
        <br />
        <b>Hair color:</b>
        {{hairColor}}
        <br />
        <b>Eye color:</b>
        {{eyeColor}}
        <br />
        <b>Hobbys:</b>
        <ul class="mb-0 pl-4">
          <li v-for="(hobby, i) in hobbys" :key="i">{{hobby}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmployeeItem",
  props: {
    id: Number,
    name: String,
    age: Number,
    city: String,
    hairColor: String,
    eyeColor: String,
    hobbys: Array
  }
};
</script>

<style>
</style>