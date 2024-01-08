<template>
  <div class="scroll-container snap-inline" :style="{gridAutoColumns: `${scrollWidth}%`}">
    <slot name="horizontal-item">
      <p>Loading . . .</p>
    </slot>
  </div>
</template>

<script setup>
defineProps({
  scrollWidth: {
    type: Number
  }
})
</script>

<style lang="scss" scoped>
.scroll-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 40px;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
}
/* scrollbar stuff  */
::-webkit-scrollbar-track {
  border-radius: 0;
}
::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar-thumb {
  border-radius: 0;
  -webkit-box-shadow: none;
  background-color: var(--divider-dark-1);
}
.snap-inline {
  scroll-snap-type: inline mandatory;
  scroll-padding-inline: 1rem;
}

@media (max-width: 720px) {
  .scroll-container {
    justify-content: start;
    display: grid;
    grid-auto-flow: column;
    overflow-x: auto;
    overflow-y: hidden;
    overscroll-behavior-inline: contain;
    padding: 0 1rem;
  }
}

</style>
