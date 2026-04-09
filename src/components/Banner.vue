<template>
  <div v-if="bannerStore.shouldShowBanner">
    <div 
      class="alert mb-0 d-flex align-items-center justify-content-between"
      :class="bannerStore.bannerStyleClass"
    >
      <div v-if="bannerStore.isLoading" class="d-flex align-items-center">
        Loading latest announcements...
      </div>

      <div v-else-if="bannerStore.currentBanner" class="d-flex align-items-center flex-grow-1">
        <button 
          v-if="bannerStore.totalBanners > 1"
          class="btn btn-sm btn-outline-dark me-2"
          @click="bannerStore.previousBanner()"
        >
          ←
        </button>

        <div class="flex-grow-1 text-center fw-bold">
          {{ bannerStore.currentBanner.message }}
        </div>

        <button 
          v-if="bannerStore.totalBanners > 1"
          class="btn btn-sm btn-outline-dark ms-2"
          @click="bannerStore.nextBanner()"
        >
          →
        </button>
      </div>

      <div class="ms-3">
        <button 
          v-if="bannerStore.totalBanners > 1"
          class="btn btn-sm btn-outline-dark me-1"
          @click="bannerStore.toggleAutoRotate()"
        >
          {{ bannerStore.autoRotate ? '⏸️' : '▶️' }}
        </button>

        <button 
          class="btn btn-sm btn-outline-dark me-1"
          @click="refreshBanners"
          :disabled="bannerStore.isLoading"
        >
          <span v-if="bannerStore.isLoading">⟳</span>
          <span v-else>🔄</span>
        </button>

        <button 
          class="btn btn-sm btn-outline-dark"
          @click="bannerStore.dismissBanner()"
        >
          ✕
        </button>
      </div>
    </div>
  </div>

  <div v-else-if="!bannerStore.isVisible" class="d-flex justify-content-center p-3">
    <button 
      class="btn btn-sm btn-secondary"
      @click="bannerStore.showBanner()"
    >
      Show Announcements
    </button>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { BannerStore } from '../stores/banner.js'

const bannerStore = BannerStore()

const refreshBanners = async () => {
  await bannerStore.fetchBannersFromAPI()
}

onMounted(async () => {
  bannerStore.init()
  
  setTimeout(() => {
    bannerStore.fetchBannersFromAPI()
  }, 1000)
})

onUnmounted(() => {
  bannerStore.cleanup()
})
</script>