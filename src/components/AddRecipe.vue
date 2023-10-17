<template>
  <div class="addRecipe">
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
.addRecipe{
  text-align: center;
  font-size: 25px;
  background-color: ;
}

</style>