import {computed } from 'vue'
import { useMouseInElement } from '@vueuse/core'

export function useCardTransformation(target) {
//   const target = ref(null)

  const { elementX, elementY, isOutside, elementHeight, elementWidth } = useMouseInElement(target)

  const cardTransformation = computed(() => {
    const MAX_ROTATION = 12
    const rX = (MAX_ROTATION / 2 - (elementY.value / elementHeight.value) * MAX_ROTATION).toFixed(2)
    const rY = ((elementX.value / elementWidth.value) * MAX_ROTATION - MAX_ROTATION / 2).toFixed(2)

    return isOutside.value
      ? ''
      : `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`
  })

  return {
    target,
    elementX,
    elementY,
    isOutside,
    elementHeight,
    elementWidth,
    cardTransformation
  }
}