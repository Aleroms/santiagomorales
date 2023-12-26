<template>
  <div>
    <div class="projects-banner">
      <div class="title">
        <h1>My Projects so far ...</h1>
      </div>
      <p class="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, dolor quas, placeat
        debitis consequuntur quia error necessitatibus voluptatum sequi itaque modi quos sunt
        reprehenderit. Voluptate quibusdam cupiditate cumque aut illum expedita a aspernatur ducimus
        ipsum commodi laboriosam repellendus
      </p>
      <h2>view my <a href="https://github.com/Aleroms">Github</a> repository</h2>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.projects-banner {
  max-width: 450px;
  margin: 3rem auto;

  a {
    color: var(--primary);
    cursor: pointer;
  }

  .text {
    margin: 2rem 0;
    line-height: 1.8rem;
  }
}
.title {
  padding: 0 1.625rem;
  h1 {
    font-size: 50px;
    margin-bottom: 0.225rem;
    letter-spacing: 0.5rem;
  }
  h2 {
    margin-bottom: 0.625rem;
    letter-spacing: 0.5rem;
    font-size: 50px;
  }
}
@media (max-width: 520px) {
  .projects-banner {
    margin: 1rem;
  }

  .title {
    padding: 0;

    h1 {
      font-size: 43px;
      margin-bottom: 0.225rem;
      letter-spacing: 0.1rem;
    }
  }
}
</style>
