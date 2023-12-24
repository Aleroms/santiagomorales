import { computed } from 'vue'
import { useMouseInElement } from '@vueuse/core'

export function useNuxtHoverEffect(target) {
  const { elementX, elementY, isOutside, elementHeight, elementWidth } = useMouseInElement(target)

  const nuxtHoverEffect = computed(() => {
    //calculate center
    let centerX = elementWidth.value / 2
    let centerY = elementHeight.value / 2
    //calc vectors from center to mouse pos
    let vectorX = centerX - elementX.value
    let vectorY = elementY.value - centerY
    //calc angle
    let angleRad = Math.atan2(vectorX, vectorY)
    //convert to deg
    let deg = angleRad * (180 / Math.PI)
    return isOutside.value
      ? `linear-gradient(${deg}deg, rgba(57, 181, 74,1), rgba(57, 181, 74,0) 30%)`
      : `rgba(57, 181, 74,1)`
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
