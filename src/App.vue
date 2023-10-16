<template>
  <div>
    <HeaderComponent/>
    <OneRecipe/>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import OneRecipe from './components/OneRecipe.vue'

export default {
  components:{
    HeaderComponent,
    OneRecipe
  },
  setup(){

  }

}

</script>

<style>
body{
  background-color: rgba(0, 0, 0, 0.89);
  color: white;
}

</style>