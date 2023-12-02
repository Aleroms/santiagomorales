<template>
  <section class="login-container">
    <LoginForm />
    <div class="go-home">
      <!-- <font-awesome-icon icon="fa-solid fa-chevron-left" color="var(--heading-color)" /> -->
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
