<script setup>
import { ref } from 'vue'
import{useAuth} from '../services/auth'
import{useRouter} from "vue-router";
const router = useRouter();

const{signup} = useAuth()

const showPassword = ref(false)
const password = ref(null) 

const confirmPassword= ref(null)
const showConfirm = ref(false)
const rules = {
    required: value => !!value || 'Required.',
    min: v => v.length >= 8 || 'Min 8 characters',
    passwordMatch: () => password.value === confirmPassword.value || 'Passwords must match'
  }

//data models
const firstname =ref(null)
const lastname =ref(null)
const email =ref(null)
const phone =ref(null)
const location =ref(null)
const address =ref(null)

function register()
{
    const data ={
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        phone: phone.value,
        location: location.value,
        address: address.value,
        password: password.value,
        role: 2,

        // role one is for admin, role 2 is for customer
    }
    signup(data)
    router.push('/').then(() => {
        router.go(0)
    })

    
    
}


</script>
<template>
  <v-container fluid class="signup-page">
    <v-row justify="center" align="center" class="fill-height">
      <v-col cols="12" md="8" lg="6">
        <v-card class="signup-card" elevation="3">
          <v-card-text class="signup-header">
            <v-row justify="center" class="mb-4">
              <v-col cols="auto">
                <v-img src="/logo.png" height="100" width="100" contain></v-img>
              </v-col>
            </v-row>
            <div class="signup-title">Sign Up</div>
          </v-card-text>

          <v-card-text>
            <v-form>
              <v-row dense>
                <v-col cols="12" md="6">
                  <v-text-field label="First Name" v-model="firstname" outlined dense></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field label="Last Name" v-model="lastname" outlined dense></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field label="Email" v-model="email" outlined dense class="signup-field"></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field label="Phone" type="number" v-model="phone" outlined dense class="signup-field"></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                  <v-select
                    label="Location"
                    :items="['Nairobi', 'Mombasa', 'Machakos', 'Makueni', 'Kisumu']"
                    v-model="location"
                    outlined
                    dense
                    class="signup-field"
                  ></v-select>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field label="Address" v-model="address" outlined dense class="signup-field"></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field
                    label="Password"
                    v-model="password"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.min]"
                    :type="showPassword ? 'text' : 'password'"
                    variant="outlined"
                    @click:append="showPassword = !showPassword"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    label="Confirm Password"
                    v-model="confirmPassword"
                    :append-icon="showConfirm ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.min, rules.passwordMatch]"
                    :type="showConfirm ? 'text' : 'password'"
                    variant="outlined"
                    @click:append="showConfirm = !showConfirm"
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row class="signup-footer">
                <v-col cols="12" md="6">
                  <v-btn @click="register()" block class="signup-button">Sign Up</v-btn>
                </v-col>
                <v-col cols="12" md="6" class="text-center text-md-start">
                  <div class="signup-note">Already have an account?</div>
                  <router-link to="/login">Login</router-link>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.signup-page {
  min-height: 100vh;
  padding: 2rem 1rem;
  background: radial-gradient(circle at top, #e8f1ff 0%, #f7fbff 55%, #ffffff 100%);
}
.signup-card {
  padding: 1.5rem;
  border-radius: 24px;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 18px 40px rgba(15, 45, 90, 0.12);
}
.signup-header {
  padding-bottom: 0;
}
.signup-title {
  display: flex;
  justify-content: center;
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #102e5c;
}
.signup-card {
  padding: 1.5rem;
  border-radius: 24px;
  background: linear-gradient(180deg, rgba(18, 56, 108, 0.95) 0%, rgba(11, 34, 67, 0.92) 100%);
  color: #f5f8ff;
  box-shadow: 0 18px 40px rgba(5, 33, 80, 0.2);
}
.signup-button {
  background-color: #6cb2ff;
  color: #07264d;
}
.signup-button:hover {
  background-color: #5aa3e6;
}
.signup-note {
  color: #e8f1ff;
}
.signup-field .v-field__control {
  background-color: rgba(255, 255, 255, 0.1);
  color: #f5f8ff;
}
.signup-field .v-label {
  color: rgba(255, 255, 255, 0.75);
}
.signup-field .v-field__outline {
  border-color: rgba(255, 255, 255, 0.35);
}
.signup-field .v-field__messages {
  color: #d3e6ff;
}
.signup-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
}
@media (max-width: 768px) {
  .signup-footer {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>