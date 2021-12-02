<template>
   <div class="nav">
      <div class="links">
        <router-link class="nav-link" extract to="/">Список дел</router-link>
        <router-link class="nav-link" to="/info">Информация</router-link>
        <div class="user-link">
          <a class="logout">Выход</a>
        </div>
      </div>
    </div> 
</template>

<script>
export default {
    name: 'HomePage',
    // asycn mounted(){
        
    // }
};
</script>
<style scoped>

</style>