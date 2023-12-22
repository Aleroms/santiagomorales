export const motionShake = {
  initial: {
    opacity: 0,
    y: 200
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1000
    }
  }
}

export const motionFloat = {
  initial: {
    y: 0
  },
  enter: {
    y: -7,
    transition: {
      duration: 1500,
      repeat: Infinity,
      repeatType: 'reverse'
    }
  }
}
