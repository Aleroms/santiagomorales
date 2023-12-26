import { computed } from 'vue'
import { useMouseInElement } from '@vueuse/core'
import { useThemeStore } from '@/stores/theme.js'

function lerp(start, end, factor) {
  return start * (1 - factor) + end * factor
}

export function useNuxtHoverEffect(target) {
  const { elementX, elementY, isOutside, elementHeight, elementWidth } = useMouseInElement(target)
  const theme = useThemeStore()
  const nuxtHoverEffect = computed(() => {
    //calculate center
    let centerX = elementWidth.value / 2
    let centerY = elementHeight.value / 2
    //calc vectors from center to mouse pos
    let vectorX = centerX - elementX.value
    let vectorY = elementY.value - centerY
    let vectorLength = Math.sqrt(vectorX ** 2 + vectorY ** 2)
    //calc angle
    let angleRad = Math.atan2(vectorX, vectorY)
    //convert to deg
    let deg = angleRad * (180 / Math.PI)
    // calculate opacity based on vectorLength
    let opacity = lerp(1, 0, vectorLength / 600)

    //colors
    let solid_color = !theme.isDark ? 'rgba(57,181,74,1)' : 'rgba(30,83,219,1)'
    let highlight = !theme.isDark
      ? `linear-gradient(${deg}deg, rgba(57, 181, 74,${opacity}), rgba(57, 181, 74,0) 20%)`
      : `linear-gradient(${deg}deg, rgba(30, 83, 219,${opacity}), rgba(30,83,219,0) 20%)`
    return isOutside.value ? highlight : solid_color
  })

  return {
    target,
    elementX,
    elementY,
    isOutside,
    elementHeight,
    elementWidth,
    nuxtHoverEffect
  }
}
