<template>
   <div class="nav">
      <div class="links">
        <router-link class="nav-link" extract to="/">Список дел</router-link>
        <router-link class="nav-link" to="/info">Информация</router-link>
        <a @click="onLogoutClicked" class="logout nav-link">Выход</a>
      </div>
    </div> 
</template>

<script>
import {doLogout} from '@/netClient/authService'

export default {
    name: 'Navigation',
    methods: {
      async onLogoutClicked () {
        try {
           await doLogout(); 
          this.$router.push('/login');
        } catch (error) {
          console.error(error);
        }
      }
    }
};
</script>
<style scoped>

</style>