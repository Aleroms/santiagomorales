//composable

import { ref, onMounted, onUnmounted } from 'vue'

export function useWindowWidth() {
  const windowWidth = ref(window.innerWidth)

  function handleResize() {
    windowWidth.value = window.innerWidth
    // console.log(windowWidth.value)
  }
  onMounted(() => window.addEventListener('resize', handleResize))
  onUnmounted(() => window.removeEventListener('resize', handleResize))

  return { windowWidth }
}
