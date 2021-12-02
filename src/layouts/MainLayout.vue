<template>
    <div class="main-layout">
        <Navigation/>
        <h2 class="page-title">

        </h2>
        <div class="page-container">
            <router-view/>
        </div>
    </div>
</template>

<script>

import Navigation from "@/components/Navigation"

export default {
  name: "MainLayout",
  components: {
      Navigation
  }
};
</script>

<style scoped>
    .main-layout{
        width: 100%;
        max-width: 800px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }
</style>