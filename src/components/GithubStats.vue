<template>
  <div class="github-wrapper">
    <div class="stats">
      <div class="img-wrapper">
        <img
          :src="`https://github-readme-stats.vercel.app/api?username=aleroms&hide=issues&show_icons=true&theme=${themeStore.githubStatsTheme}`"
          alt="top languages on github"
          draggable="false"
          loading="lazy"
        />
      </div>
      <div class="img-wrapper">
        <img
          :src="`https://github-readme-stats.vercel.app/api/top-langs/?username=aleroms&layout=compact&theme=${themeStore.githubStatsTheme}&hide=shaderlab&exclude_repo=GGJ2023,ButtonGame,Unity_Tutorials,HotJam2021,GlobalGameJam2021,RedSparrow-Capstone169,169a-b-F20-W21-Red-Sparrow,VideoPoker,RainbowTennisUSA,Space-Trucker`"
          alt="top languages on github"
          draggable="false"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useThemeStore } from '@/stores/theme.js'
const themeStore = useThemeStore()
</script>

<style lang="scss" scoped>
.stats {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 8rem 1rem;
}
// .img-wrapper {
//   height: 174px;

//   img {
//     height: 100%;
//   }
// }
// @media (max-width: 900px) {
//   .stats {
//     flex-direction: column;
//   }
//   .img-wrapper {
//     max-width: 400px;

//     img {
//       width: 100%;
//     }
//   }
// }
</style>
