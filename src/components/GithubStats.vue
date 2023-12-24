<template>
  <div class="github-stats">
    <div class="profile">
      <div class="img-wrapper">
        <img
          src="https://github.com/aleroms.png"
          alt="profile picture"
          draggable="false"
          loading="lazy"
        />
      </div>
      <article class="pro-text">
        <h2>Santiago Morales</h2>
        <h4 class="subtitle">Aleroms</h4>
      </article>
    </div>
    <div class="github-wrapper">
      <img
        :src="`https://github-readme-stats.vercel.app/api/top-langs/?username=aleroms&layout=compact&theme=${themeStore.githubStatsTheme}&hide=shaderlab&exclude_repo=GGJ2023,ButtonGame,Unity_Tutorials,HotJam2021,GlobalGameJam2021,RedSparrow-Capstone169,169a-b-F20-W21-Red-Sparrow,VideoPoker,RainbowTennisUSA,Space-Trucker`"
        alt="top languages on github"
        draggable="false"
        loading="eager"
      />
    </div>
  </div>
</template>

<script setup>
import { useThemeStore } from '@/stores/theme.js'
const themeStore = useThemeStore()
</script>

<style lang="scss" scoped>
.github-stats {
  display: flex;
  align-items: center;
  border-radius: 15px;
  padding: 2rem 0 1rem;
  background-color: var(--secondary-soft);
  margin: 1rem;
  width: 400px;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}
.pro-text {
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  text-wrap: nowrap;
  padding: 1rem 0;
}
.profile {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;
}
.img-wrapper {
  width: 100px;
  height: 100px;
  margin-right: 1rem;

  img {
    width: 100%;
    border-radius: 50px;
  }
}
.github-wrapper {
  padding-top: 2rem;
  width: 300px;
  height: 200px;

  img {
    width: 100%;
  }
}
</style>
