<template>
  <div class="nameAllRecepies">
    <h2>All Recipes</h2>
    <p>fdfdmodmfodm</p>
    <p>fdfdmodmfodm</p>
    <p>fdfdmodmfodm</p>
    <p>fdfdmodmfodm</p>
    <p>fdfdmodmfodm</p>
    <p>fdfdmodmfodm</p>
  </div>
  <div>
  </div>
</template>

<script lang="ts">
import { allRecipesInfo } from "";
import { ref } from "vue";

export default {
  setup(){
  const allRecipesText = ref<Recipe>(allRecipesInfo)

    return{
      allRecipesText
    }
  }
}
</script>

<style>
.nameAllRecepies{
  background-color: #b09e7d;
  border-radius: 10px;
  padding: 10px;
}

.nameAllRecepies h2{
  color: white;
  font-size: 30px;
  margin: 3px 7px;
}

.nameAllRecepies p{
  color: white;
  margin-left: 25px;
}

</style>