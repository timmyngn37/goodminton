import { defineStore } from 'pinia'

export const BannerStore = defineStore('banner', {
    state: () => ({
        isVisible: true,
        currentBannerIndex: 0,
        isLoading: false,
        lastUpdated: null,
        banners: [
            {
                id: 1,
                message: "Welcome to Goodminton! Book your court today!",
                type: "info",
                priority: 1
            },
            {
                id: 2,
                message: "New racquets available in our shop - Check them out!",
                type: "success",
                priority: 2
            },
            {
                id: 3,
                message: "Upcoming tournament registration now open!",
                type: "warning",
                priority: 3
            }
        ],
        fetchedBanners: [],
        rotationInterval: null,
        autoRotate: true,
        rotationSpeed: 4000
    }),

    getters: {
        currentBanner: (state) => {
            const allBanners = [...state.banners, ...state.fetchedBanners]
            return allBanners[state.currentBannerIndex] || null
        },

        bannerStyleClass() {
            const current = this.currentBanner
            if (!current) return 'alert-info'

            switch (current.type) {
                case 'success': return 'alert-success'
                case 'warning': return 'alert-warning'
                case 'danger': return 'alert-danger'
                default: return 'alert-info'
            }
        },

        totalBanners: (state) => state.banners.length + state.fetchedBanners.length,

        shouldShowBanner: (state) => state.isVisible && (state.totalBanners > 0 || state.isLoading),
    },

    actions: {
        toggleVisibility() {
            this.isVisible = !this.isVisible
            if (!this.isVisible) {
                this.stopRotation()
            } else if (this.autoRotate) {
                this.startRotation()
            }
        },

        dismissBanner() {
            this.isVisible = false
            this.stopRotation()
        },

        showBanner() {
            this.isVisible = true
            if (this.autoRotate) {
                this.startRotation()
            }
        },

        nextBanner() {
            const totalBanners = this.banners.length + this.fetchedBanners.length
            if (totalBanners > 0) {
                this.currentBannerIndex = (this.currentBannerIndex + 1) % totalBanners
            }
        },

        previousBanner() {
            const totalBanners = this.banners.length + this.fetchedBanners.length
            if (totalBanners > 0) {
                this.currentBannerIndex = this.currentBannerIndex == 0
                    ? totalBanners - 1
                    : this.currentBannerIndex - 1
            }
        },

        startRotation() {
            if (this.rotationInterval) return

            this.rotationInterval = setInterval(() => {
                this.nextBanner()
            }, this.rotationSpeed)
        },

        stopRotation() {
            if (this.rotationInterval) {
                clearInterval(this.rotationInterval)
                this.rotationInterval = null
            }
        },

        toggleAutoRotate() {
            this.autoRotate = !this.autoRotate
            if (this.autoRotate && this.isVisible) {
                this.startRotation()
            } else {
                this.stopRotation()
            }
        },

        addBanner(banner) {
            const newBanner = {
                id: Date.now(),
                message: banner.message || 'New announcement',
                type: banner.type || 'info',
                priority: banner.priority || 3,
                ...banner
            }
            this.banners.push(newBanner)
        },

        removeBanner(bannerId) {
            this.banners = this.banners.filter(banner => banner.id != bannerId)
            this.fetchedBanners = this.fetchedBanners.filter(banner => banner.id != bannerId)

            const totalBanners = this.banners.length + this.fetchedBanners.length
            if (this.currentBannerIndex >= totalBanners && totalBanners > 0) {
                this.currentBannerIndex = totalBanners - 1
            } else if (totalBanners == 0) {
                this.currentBannerIndex = 0
            }
        },

        async fetchBannersFromAPI() {
            this.isLoading = true

            try {
                await new Promise(resolve => setTimeout(resolve, 2000))

                const apiBanners = [
                    {
                        id: 101,
                        message: "🎉 Special offer: 20% off all equipment this week!",
                        type: "success",
                        priority: 1
                    },
                    {
                        id: 102,
                        message: "⚠️ Court maintenance scheduled for this weekend",
                        type: "warning",
                        priority: 2
                    },
                    {
                        id: 103,
                        message: "🏆 Congratulations to our tournament winners!",
                        type: "info",
                        priority: 3
                    }
                ]

                this.fetchedBanners = apiBanners
                this.lastUpdated = new Date()

                if (this.currentBannerIndex >= this.totalBanners) {
                    this.currentBannerIndex = 0
                }

            } catch (error) {
                console.error('Error fetching banners:', error.message)
                this.addBanner({
                    message: "Failed to load latest announcements. Using cached content.",
                    type: "danger",
                    priority: 1
                })
            } finally {
                this.isLoading = false
            }
        },

        init() {
            if (this.autoRotate && this.isVisible) {
                this.startRotation()
            }
        },

        cleanup() {
            this.stopRotation()
        }
    }
})