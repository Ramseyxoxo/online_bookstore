
<script setup>
import { useWishlistStore } from '../stores/wishlist'
const wishlistStore = useWishlistStore()

function remove(id){
    wishlistStore.removeFromWishlist(id)
}
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="text-display-medium mb-12 mt-12 text-center">My Wishlist</div>
      </v-col>
    </v-row>

    <v-row v-if="wishlistStore.wishlist.length === 0">
      <v-col class="text-center">Your wishlist is empty.</v-col>
    </v-row>

    <v-row v-for="item in wishlistStore.wishlist" :key="item.id">
      <v-col md="2">
        <v-img :src="item.image" height="100"></v-img>
      </v-col>
      <v-col md="4">
        <v-card-title>{{ item.name }}</v-card-title>
        <v-card-subtitle>Ksh {{ item.price }}</v-card-subtitle>
      </v-col>
      <v-col md="2">
        <v-btn color="error" @click="remove(item.id)">Remove from wishlist</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template> 