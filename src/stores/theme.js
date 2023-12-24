import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    isDark: false,
    githubStatsTheme: 'dark'
  }),
  actions: {
    toggleTheme() {
      this.isDark = !this.isDark
      this.githubStatsTheme = !this.isDark ? 'dark' : 'default'
    }
  }
})
