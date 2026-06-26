<script setup>
import { ref } from 'vue'
import { useCartStore } from '../stores/cart'
import { useBooksStore } from '../stores/books'
import { useRouter } from 'vue-router'

const router = useRouter()
const booksStore = useBooksStore()
const books= booksStore.books

function view(book){
   booksStore.updateSelectedBook(book) // keep track of the selected item
    router.push('/view_book')
}

//cart
const cartStore = useCartStore()
const quantity = ref(1)

function buy(book){
    book.quantity= quantity.value
    cartStore.updateCart(book)
}
</script>

<template>
  <v-container max-width="100%">
    <v-row>
        <v-col>
            <div class="text-display-medium mb-12 mt-12 text-center">
                Browse Books
            </div>
        </v-col>
    </v-row>
    <v-row>
        <v-col v-for="(book, key) in books" :key="key">
          <v-card class="h-100 d-flex flex-column" width="250">
            <v-img :src="book.image" height="200px" class="mt-4"></v-img>
            <v-card-title>{{ book.name }}</v-card-title>
            <v-card-subtitle>{{ book.price }}</v-card-subtitle>
            <v-card-text>{{ book.description }}</v-card-text>
            <v-card-text>By: {{ book.author }} </v-card-text>
            <v-card-actions>
              <v-btn  color="primary" variant="elevated" @click="buy(book)">Add to Cart</v-btn>
              <v-btn  color="primary" variant="elevated" @click="view(book)">View Book</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
    </v-row>
    <v-dialog v-model="showAddBookDialog" max-width="600">
      <v-form @submit.prevent >
        <v-card>
          <v-card-title class="pa-6">
            <v-row>
              Add Book
              <v-spacer></v-spacer>
              <v-btn class="ma-2" color="blue-darken-2" icon="mdi-close" @click="close();"></v-btn>
            </v-row>
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col md="6">
                <v-text-field label="Book Title" v-model="bookName" required></v-text-field>
              </v-col>
              <v-col md="6">
                <v-text-field label="Author" v-model="author" required></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col md="6">
                <v-text-field label="Image" v-model="image" required></v-text-field>
              </v-col>
              <v-col md="6">
                <v-text-field label="Price" v-model="price" required></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col md="12">
                <v-textarea label="Short Description" v-model="description" required></v-textarea>
              </v-col>
            </v-row>
            <v-row>
              <v-col md="12">
                <v-textarea label="Long Description" v-model="long_description" required></v-textarea>
              </v-col>
            </v-row>
            <v-row>
              <v-col md="6">
                <v-select :items="['Fiction', 'Non Fiction', 'Educational', 'Self Help']" v-model ="genre">
                </v-select>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text="Close" variant="plain" @click="close()" ></v-btn>
            <v-btn color="primary"  text="Save" variant="tonal" @click="addBook()" ></v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>
  </v-container>
</template> 