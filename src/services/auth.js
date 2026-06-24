import { ref } from 'vue'

export function useAuth() {
    const isAuthenticated = ref(false)
    const isAdmin = ref(false)

    // Login
    async function checkCredentials(credentials) {

        try {

            if (!credentials.email || !credentials.password) {
                throw new Error('Email and password are required')
            }
            
            const userData = localStorage.getItem('user')

            if (userData) {
                const user = JSON.parse(userData)
                // simple credential check against stored user (local demo only)
                if (user.email === credentials.email && user.password === credentials.password) {
                    isAuthenticated.value = true
                    if (user.role == 1) isAdmin.value = true

                    localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated.value))
                    localStorage.setItem('isAdmin', JSON.stringify(isAdmin.value))

                    return user
                }
                throw new Error('Invalid credentials')
            } else {
                throw new Error('No user found')
            }

        } catch (err) {
            console.log("Login failed")
           
        } 
    }

    // Register
    async function signup(data) {
        try{
            isAuthenticated.value = true
            if (data.role == 1) isAdmin.value = true

            localStorage.setItem("isAuthenticated", isAuthenticated.value);
            localStorage.setItem("isAdmin", isAdmin.value);
            localStorage.setItem("user", JSON.stringify(data))
        }catch{
            console.log("Error signing up")
        }
    }

    // Logout
    function logout() {
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem('user');
        localStorage.removeItem("isAdmin");
    }
    return {
        checkCredentials,
        signup,
        logout,
    }
 }