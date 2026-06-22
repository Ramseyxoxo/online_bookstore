<script setup>

import { ref, computed } from 'vue'
import { useBooksStore } from '../stores/books'
import { useCartStore } from '../stores/cart'
import { useRouter } from 'vue-router'

const router = useRouter()
const booksStore = useBooksStore()
const book = booksStore.selectedBook

//cart
const cartStore = useCartStore()
const quantity = ref(1)

function buy(b){
        const payload = b && b.value ? b.value : b
        payload.quantity = quantity.value
        cartStore.updateCart(payload)
}

const total = computed(() => {
    const b = book && book.value ? book.value : book
    return b && b.price ? b.price * quantity.value : 0
})

</script>

<template>
  <v-container>
    <v-row>
            <v-col md="2">
                <v-btn icon color="primary" to="/books" class="ma-12">
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
            </v-col>
      <v-col md="10">
        <div class="text-display-medium mb-12 mt-12 text-center">
            Book Title
        </div>
      </v-col>
    </v-row>
    <v-row>
            <v-col md="6">
            <v-card>
                <v-img class="align-end text-white" height="620" :src="book.image"  ></v-img>
            </v-card>
            </v-col>
            <v-col md="6">
                <v-card height="620" color="primary">
                    <div>
                        <v-card-title class="mb-4">{{ book.name }}</v-card-title>
                        <v-chip class="mb-4"> {{ book.genre }} </v-chip>
                            <v-row>
                                <v-col md="4">
                                    <v-rating :model-value="book.rating" :size="24" readonly ></v-rating>
                                </v-col>
                                <v-col md="6">
                                    <v-btn color="lime-lighten-2" variant="outlined" density="compact" readonly > In Stock</v-btn>
                                </v-col>
                            </v-row>
                        <v-card-text style="height: 300px; overflow-y: auto;">{{ book.long_description }}</v-card-text>
                        <v-card-subtitle>Ksh Price</v-card-subtitle>
                        <v-card-text> 
                            <v-row>
                                <v-col md="4">Quantity</v-col>
                                <v-col md="6">
                                    <v-text-field type="number" v-model="quantity" control-variant="split" density="compact" :min="1" :max="10" />
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </div>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-card-text>Total: {{ total }}</v-card-text>
                        <v-btn elevation="4" variant="elevated" @click="buy(book)" > Add to Cart </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    
  </v-container>
</template>