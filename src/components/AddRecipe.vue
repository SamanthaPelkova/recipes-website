<template>
  <div class="jj">
    <h2>Add recipe</h2>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  setup(){
    const router = useRouter()

    return{
      router
    }
  }
}
</script>

<style>
.jj{
  background-color: black;
}

</style>