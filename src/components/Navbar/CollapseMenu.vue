<template>
  <div class="collapse-container">

    <div class="inner-container">
      <div class="links">
        <RouterLink to="/">Home</RouterLink>
        <hr />
        <RouterLink to="/about">About</RouterLink>
        <hr />
        <RouterLink to="/skills">Skills</RouterLink>
        <hr />
        <RouterLink to="/projects">Projects</RouterLink>
        <hr />
        <RouterLink to="/contact">Contact</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.links {
  hr {
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 0;
    border: 1px solid var(--secondary);
  }
  a{
    text-decoration: none;
    font-weight: 900;
  }
}
.inner-container {
  border-radius: 10px;
  margin: 2rem auto;
  padding: 1rem;
  width: 300px;
  background-color: red;
}
.collapse-container {
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 100%;
  top: 80px;
  left: 0;
  // background-color: var(--secondary);
  background-color: gray;
}
.routes-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  list-style: none;

  .router-link-active {
    color: var(--primary);
  }
  li {
    margin: 0 1rem;

    a {
      text-decoration: none;
      font-weight: 900;
    }
  }
}
</style>
