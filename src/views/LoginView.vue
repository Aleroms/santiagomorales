<template>
  <section class="login-container">
    <LoginForm />
    <div class="go-home">
      <RouterLink to="/">Go Home</RouterLink>
    </div>
  </section>
</template>

<script setup>
import LoginForm from '../components/Utilities/Forms/LoginForm.vue'
</script>

<style lang="scss" scoped>
.go-home {
  text-align: center;
}
</style>
