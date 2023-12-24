<template>
  <div class="github-stats">
    <div class="profile">
      <div class="img-wrapper">
        <img
          src="https//github.com/aleroms.png"
          alt="profile picture"
          draggable="false"
          loading="lazy"
        />
      </div>
      <h3>Santiago Morales</h3>
    </div>

    <img
      :src="`https://github-readme-stats.vercel.app/api/top-langs/?username=aleroms&layout=compact&theme=${themeStore.githubStatsTheme}&hide=shaderlab&exclude_repo=GGJ2023,ButtonGame,Unity_Tutorials,HotJam2021,GlobalGameJam2021,RedSparrow-Capstone169,169a-b-F20-W21-Red-Sparrow,VideoPoker,RainbowTennisUSA,Space-Trucker`"
      alt="top languages on github"
      draggable="false"
      loading="eager"
    />
  </div>
</template>

<script setup>
// :validation="`${manageStore.required}|date_val`"
import { useThemeStore } from '@/stores/theme.js'
const themeStore = useThemeStore()
</script>

<style lang="scss" scoped></style>
