<template>
  <div class="headers">
    <AllRecipes/>
    <AddRecipe/>
  </div>
</template>

<script>
import AllRecipes from "@/components/AllRecipes.vue";
import AddRecipe from "@/components/AddRecipe.vue";

export default {
  components: {AddRecipe, AllRecipes},
  setup(){

  }
}
</script>

<style>

</style>