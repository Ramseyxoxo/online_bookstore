<script setup>
</script>

<template>
  <v-container max-width="100%">
    <v-row>
      <v-col>
        <v-carousel cycle>
          <v-carousel-item src="/carousel1.jpg" cover />
          <v-carousel-item src="/carousel2.jpg" cover />
          <v-carousel-item src="/carousel3.jpg" cover />
          <v-carousel-item src="/carousel4.jpg" cover />
        </v-carousel>
        
      </v-col>
    </v-row>
  </v-container>
  <!-- About Us -->
  <v-container class="bg-secondary" max-width="100%">
    <v-row>
      <v-col class="text-center">
        <div class="text display medium mb-12"> WELCOME TO RAMSEY'S BOOKSTORE</div>
        <div class="text body large font-weight-light mb-8">
            Ramsey's Bookstore is a family-owned business that has been serving the community for over 20 years. We offer a wide selection of books, from bestsellers to classics, and our knowledgeable staff is always ready to help you find your next great read.
            it has been a pleasure to serve our customers and we look forward to many more years of providing quality books and excellent customer service.
            Always remember, reading is a journey that never ends. So,
            be happy and keep reading!
        </div>
      </v-col>
    </v-row>
  </v-container>
  <!-- Our Bestsellers -->
  <v-container class="bg-light" max-width="100%">
    <v-row>
      <v-col md="3">
        <v-card>
          <v-img src="Bestseller1.jpg" cover></v-img>
            <v-card-title>The Picture of Dorian Gray</v-card-title>
            <v-card-subtitle>2000</v-card-subtitle>
            <v-btn to="/cart" color="primary">Add to Cart</v-btn>
          </v-card>
      </v-col>
      
      <v-col md="3">
        <v-card>
          <v-img src="Bestseller2.jpg" cover></v-img>
            <v-card-title>Rachel Hollins</v-card-title>
            <v-card-subtitle>1800</v-card-subtitle>
            <v-btn to="/cart" color="primary">Add to Cart</v-btn>
          </v-card>
      </v-col>
        
      <v-col md="3">
        <v-card>
          <v-img src="Bestseller3.jpg" cover></v-img>
            <v-card-title>How innovation works</v-card-title>
            <v-card-subtitle>1500</v-card-subtitle>
            <v-btn to="/cart" color="primary">Add to Cart</v-btn>
          </v-card>
      </v-col>
        
      <v-col md="3">
        <v-card>
          <v-img src="Bestseller4.jpg" cover></v-img>
            <v-card-title>Psychology of Money</v-card-title>
            <v-card-subtitle>1200</v-card-subtitle>
            <v-btn to="/cart" color="primary">Add to Cart</v-btn>
          </v-card>
      </v-col>
       <v-col md="3">
        <v-card>
          <v-img src="Bestseller5.jpg" cover></v-img>
            <v-card-title>Your Soul is a river</v-card-title>
            <v-card-subtitle>1300</v-card-subtitle>
            <v-btn to="/cart" color="primary">Add to Cart</v-btn>
          </v-card>
      </v-col>

      <v-col md="3">
        <v-card>
          <v-img src="Bestseller6.jpg" cover></v-img>
            <v-card-title>The fine Print</v-card-title>
            <v-card-subtitle>1400</v-card-subtitle>
            <v-btn to="/cart" color="primary">Add to Cart</v-btn>
          </v-card>
      </v-col>

      <v-col md="3">
        <v-card>
          <v-img src="Bestseller7.jpg" cover></v-img>
            <v-card-title>Company ofOne</v-card-title>
            <v-card-subtitle>1500</v-card-subtitle>
            <v-btn to="/cart" color="primary">Add to Cart</v-btn>
          </v-card>
      </v-col>

      <v-col md="3">
        <v-card>
          <v-img src="Bestseller8.jpg" cover></v-img>
            <v-card-title>How to stop worring and starting living</v-card-title>
            <v-card-subtitle>1600</v-card-subtitle>
            <v-btn to="/cart" color="primary">Add to Cart</v-btn>
          </v-card>
      </v-col>

      <v-col md="3">
        <v-card>
          <v-img src="Bestseller9.jpg" cover></v-img>
            <v-card-title>Goal Planner</v-card-title>
            <v-card-subtitle>1700</v-card-subtitle>
            <v-btn to="/cart" color="primary">Add to Cart</v-btn>
          </v-card>
      </v-col>

      <v-col md="3">
        <v-card>
          <v-img src="Bestseller10.jpg" cover></v-img>
            <v-card-title>Zero to One</v-card-title>
            <v-card-subtitle>1800</v-card-subtitle>
            <v-btn to="/cart" color="primary">Add to Cart</v-btn>
          </v-card>
      </v-col>

      <v-col md="3">
        <v-card>
          <v-img src="Bestseller11.jpg" cover></v-img>
            <v-card-title>All the letters I should habe Sent</v-card-title>
            <v-card-subtitle>1900</v-card-subtitle>
            <v-btn to="/cart" color="primary">Add to Cart</v-btn>
          </v-card>
      </v-col>

      <v-col md="3">
        <v-card>
          <v-img src="Bestseller12.jpg" cover></v-img>
            <v-card-title>A fine Print</v-card-title>
            <v-card-subtitle>1200</v-card-subtitle>
            <v-btn to="/cart" color="primary">Add to Cart</v-btn>
          </v-card>
      </v-col>

      <v-col md="3">
        <v-card>
          <v-img src="Bestseller13.jpg" cover></v-img>
            <v-card-title>The subtle Art of not giving a F*ck</v-card-title>
            <v-card-subtitle>2000</v-card-subtitle>
            <v-btn to="/cart" color="primary">Add to Cart</v-btn>
          </v-card>
      </v-col>

      <v-col md="3">
        <v-card>
          <v-img src="Bestseller14.jpg" cover></v-img>
            <v-card-title>The Two Towers</v-card-title>
            <v-card-subtitle>2400</v-card-subtitle>
            <v-btn to="/cart" color="primary">Add to Cart</v-btn>
          </v-card>
      </v-col>
    </v-row>
  </v-container>

  <!-- Footer -->
  <v-container class="bg-primary" max-width="100%">
    <v-row>
        <v-col>
            <div align="center">
                <router-link to="/">
                    <v-img src="/logo.png" width="50%" height="50%" ></v-img>
                </router-link>

                <p> Copyright Ramsey's Online bookstore &copy; 2026</p>
            </div>
        </v-col>
        <v-col md="4" >
            <div class="text-center">
                <p>Follow us on:</p>
                <v-icon icon="mdi-instagram"></v-icon>
                <v-icon icon="mdi-twitter"></v-icon>
                <v-icon icon="mdi-facebook"></v-icon>
            </div>
        </v-col>
        <v-col md="4">
            <div class="text-center">
                <p> Contact Us:</p>
                <p>Email: info@Ramsey'sbookshop.com</p>
                <p>Phone: 254790878037</p>
            </div>
        </v-col>
    </v-row>
  </v-container>

</template> 