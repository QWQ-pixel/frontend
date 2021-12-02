<template>
    <div class = "home-page"></div>    
</template>

<script>
export default {
    name: 'HomePage',
    async mounted(){
        const response = await fetch('http://jsonplaceholder.typicode.com/todos');
        console.warn({ response });
    }
};
</script>