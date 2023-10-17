<template>
  <div class="headers">
    <a href="AllRecipes.vue" class="allRecipes"> <AllRecipes/></a>
    <a href="AddRecipe.vue" class="addRecipe"><AddRecipe/></a>
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
.headers{
  background-color: white;
  border-radius: 10px;
}

.headers{
  display: flex;
  align-items: center;
  margin: 20px 50px 50px;
}
.addRecipe {
  margin-left: 20px;
  text-decoration: none;
  color: wheat;
  transition: color 0.3s;
}
.addRecipe:hover{
  color: #b09e7d;
}

.allRecipes{
  text-decoration: none;
  color: wheat;
  padding-left: 10px;
  transition: color 0.3s;
}

.allRecipes:hover{
  color: #b09e7d;
}

</style>