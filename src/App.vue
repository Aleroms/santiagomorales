<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink to="/">home</RouterLink>
    <RouterLink to="/about">about link</RouterLink>
    <RouterLink to="/manage">manage</RouterLink>
    <RouterLink to="/projects">projects</RouterLink>
    <RouterLink to="/skills">skills</RouterLink>
    <RouterLink to="/login">login</RouterLink>
  </header>
  <main>
    <RouterView />
  </main>
  <footer>footer</footer>
</template>

<style scoped></style>
