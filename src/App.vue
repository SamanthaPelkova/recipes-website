<template>
  <div>
    <div class="header">
      <HeaderComponent/>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'

export default {
  components:{
    HeaderComponent,

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

.header{
  background-color: white;
  border-radius: 10px;
}

</style>