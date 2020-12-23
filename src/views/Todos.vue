<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1 class="my-5">This is the Todos page</h1>
      </div>
    </div>
    <Todos />
  </div>
</template>

<script>
import Todos from "@/components/todos/Todos";

export default 
{
  components: 
  {
    Todos
  }
};
</script>
