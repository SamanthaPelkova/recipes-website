<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link to="/recipes/all" class="routerLinkAllRecipes">All Recipes</router-link>
        </li>
        <li>
          <router-link to="/recipes/add" class="routerLinkAddRecipe">Add Recipe</router-link>
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
header{
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
.header nav ul li:hover {
  color: #b09e7d;
}
.header nav ul{
  list-style: none;
}

ul{
  display: flex;
  justify-content: center;
  align-items: center;
}

.routerLinkAllRecipes{
  text-decoration: none;
  font-size: 30px;
  color: black;
  transition: color 0.3s;
}
.routerLinkAllRecipes:hover{
  color: #b09e7d;
}

.routerLinkAddRecipe{
  text-decoration: none;
  font-size: 30px;
  color: black;
  transition: color 0.3s;
}
.routerLinkAddRecipe:hover{
  color: #b09e7d;
}

</style>