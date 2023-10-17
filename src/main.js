import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import AllRecipes from './components/AllRecipes.vue';
import AddRecipe from './components/AddRecipe.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/recipes' },
        { path: '/recipes', component: AllRecipes },
        { path: '/recipes/all', component: AllRecipes },
        { path: '/recipes/add', component: AddRecipe }
    ]
});

const app = createApp(App);

app.use(router);

app.mount('#app');
