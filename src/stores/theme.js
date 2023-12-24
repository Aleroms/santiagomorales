import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    isDark: false,
    githubStatsTheme: 'transparent'
  }),
  actions: {
    toggleTheme() {
      this.isDark = !this.isDark
      this.githubStatsTheme = !this.isDark ? 'transparent' : 'default'
    }
  }
})
