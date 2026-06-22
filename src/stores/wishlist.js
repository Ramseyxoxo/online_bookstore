// stores/wishlist.js
import { defineStore } from 'pinia'

export const useWishlistStore = defineStore('wishlist', {
  state: () => {
    const wishlist = []
    return { wishlist }
  },
  actions: {
    addToWishlist(payload) {
      const alreadyAdded = this.wishlist.some(item => item.id === payload.id)
      if (!alreadyAdded) {
        this.wishlist.push(payload)
      }
    },
    removeFromWishlist(id) {
      this.wishlist = this.wishlist.filter(item => item.id !== id)
    }
  },
})