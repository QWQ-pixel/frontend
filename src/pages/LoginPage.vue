<template>
    <form @submit.prevent="onFormSubmit" class="login-form auth-form">
        <div class="form-field">
            <label for="login">Логин</label>
            <input id="login" type="text" required>
        </div>
        <div class="form-field">
            <label for="login">Пароль</label>
            <input id="login" type="text" required>
        </div>
        <button class="submit-btn" type="submit">Войти</button>
        <div class="action-link">
            <span>Нет аккаунта?</span>
            <a @click="redirect" class="link-btn">Регистрация</a>
        </div>
    </form>
</template>

<script>
export default {
    name: 'LoginPage',
    async mounted(){
        
    },
    methods: {
        onFormSubmit() {
            this.$router.push('/');
        },
        redirect(){
            this.$router.push('/registration');
        }
    }
};
</script>