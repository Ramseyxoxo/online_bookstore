 <script setup>
import { useRouter } from 'vue-router'
const user = JSON.parse(localStorage.getItem('user'))
const router = useRouter()
</script>

<template>
      <v-container v-if="user" class="mt-8">
    <v-row>
      <v-col cols="auto">
        <v-btn icon="mdi-arrow-left" variant="text" @click="router.push('/LandingPage')"></v-btn>
      </v-col>
      <v-col>
        <div class="text-h5 mt-2">About me</div>
      </v-col>
    </v-row>

    <v-row class="mt-4">
      <v-col cols="auto">
          <v-avatar size="100" :image="'/replacement.png'"></v-avatar>
        </v-col>
        <v-col class="d-flex align-center">
          <div class="text-h6">{{ user.firstname }} {{ user.lastname }}</div>
        </v-col>
      </v-row>
        

    <v-row class="mt-6">
      <v-col cols="12">
        <v-card class="pa-4">
          <v-row align="center">
            <v-col cols="1"><v-icon icon="mdi-account"></v-icon></v-col>
            <v-col>
              <div class="text-caption text-grey">Name</div>
              <div>{{ user.firstname }} {{ user.lastname }}</div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <v-col cols="12">
        <v-card class="pa-4">
          <v-row align="center">
            <v-col cols="1"><v-icon icon="mdi-email"></v-icon></v-col>
            <v-col>
              <div class="text-caption text-grey">Email</div>
              <div>{{ user.email }}</div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <v-col cols="12">
        <v-card class="pa-4">
          <v-row align="center">
            <v-col cols="1"><v-icon icon="mdi-phone"></v-icon></v-col>
            <v-col>
              <div class="text-caption text-grey">Phone</div>
              <div>{{ user.phone }}</div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <v-col cols="12">
        <v-card class="pa-4">
          <v-row align="center">
            <v-col cols="1"><v-icon icon="mdi-map-marker"></v-icon></v-col>
            <v-col>
              <div class="text-caption text-grey">Location</div>
              <div>{{ user.location }}</div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <v-col cols="12">
        <v-card class="pa-4">
          <v-row align="center">
            <v-col cols="1"><v-icon icon="mdi-home"></v-icon></v-col>
            <v-col>
              <div class="text-caption text-grey">Address</div>
              <div>{{ user.address }}</div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <v-container v-else class="mt-8 text-center">
    <div class="text-h6">No profile found.</div>
    <div>Please sign up first.</div>
    <v-btn class="mt-4" color="primary" to="/sign-up">Go to Sign Up</v-btn>
  </v-container>
</template> 