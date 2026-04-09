import { defineStore } from 'pinia'

export const DarkMode = defineStore('darkMode', {
    state: () => ({
        isDarkMode: false
    }),

    getters: {
        themeClass: (state) => state.isDarkMode ? 'dark-theme' : 'light-theme',
        buttonText: (state) => state.isDarkMode ? 'Light Mode' : 'Dark Mode'
    },

    actions: {
        toggleDarkMode() {
            this.isDarkMode = !this.isDarkMode
            this.saveToLocalStorage()
            this.applyThemeToBody()
        },

        initializeDarkMode() {
            const saved = localStorage.getItem('darkMode')
            if (saved != null) {
                this.isDarkMode = JSON.parse(saved)
            } else {
                this.isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
            }
            this.applyThemeToBody()
        },

        saveToLocalStorage() {
            localStorage.setItem('darkMode', JSON.stringify(this.isDarkMode))
        },

        applyThemeToBody() {
            document.body.className = this.isDarkMode ? 'dark-theme' : 'light-theme'
        }
    }
})