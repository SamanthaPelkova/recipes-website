<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link to="/recipes/all">All Recipes</router-link>
        </li>
        <li>
          <router-link to="/recipes/add">Add Recipe</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { inject } from 'vue';

export default {
  setup() {
    const loadedRecipes = inject('recipes');

    return { products: loadedRecipes };
  },
};
</script>

<style>
.header{
  display: flex;
  align-items: center;
  margin: 20px 50px 50px;
}
.header nav ul li {
  margin-left: 20px;
  text-decoration: none;
  color: wheat;
  transition: color 0.3s;
}
.header nav ul li{
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