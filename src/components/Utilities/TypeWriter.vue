<template>
  <div class="type-writer">
    <h3 class="text">{{ state.text }}</h3>
  </div>
</template>

<!-- Typewriter.vue -->
<script setup lang="ts">
import { reactive } from 'vue'
const props = withDefaults(
  defineProps<{
    data: Array<string>
    start?: number
    enter?: number
    end?: number
    leave?: number
  }>(),
  {
    data: () => [],
    start: 1000,
    enter: 90,
    end: 1500,
    leave: 60
  }
)
const state = reactive({ text: '', complete: false, index: 0 })
addText()
function addText() {
  if (state.text.length < props.data[state.index].length && !state.complete) {
    state.text += props.data[state.index].charAt(state.text.length)
    setTimeout(addText, props.enter)
  }
  if (state.text.length === props.data[state.index].length) {
    state.complete = true
    setTimeout(removeText, props.end)
  }
}
function removeText() {
  if (state.text.length > 0) {
    const t = state.text.split('')
    t.pop()
    state.text = t.join('')
    setTimeout(removeText, props.leave)
  }
  if (state.text.length === 0 && state.complete) {
    state.complete = false
    if (state.index === props.data.length - 1) {
      state.index = 0
    } else {
      state.index++
    }
    setTimeout(addText, props.start)
  }
}
</script>

<style lang="scss" scoped>
.type-writer {
  display: flex;
  align-items: center;
  height: 1.25rem;

  .text {
    animation: blink 1s infinite;
    border-width: 0;
    border-right: 2px solid var(--divider-dark-1);
    border-style: solid;
    border-color: transparent;
    font-weight: bold;
  }
}

@keyframes blink {
  0%,
  45% {
    border-color: transparent;
  }
  50%,
  100% {
    border-color: var(--divider-dark-1);
  }
}
</style>
