<script setup>
import {ref} from 'vue'
import { useBooksStore } from '../stores/books'
import { useUsersStore } from '../stores/users'
import { useOrdersStore } from '../stores/orders'

const booksStore = useBooksStore()
const usersStore = useUsersStore()                      //basically stores are defined as the value here Each line activates that store and stores the connection in a variable. Until this runs, booksStore etc. don't exist as usable objects.
const ordersStore = useOrdersStore()


const books= booksStore.books                       //<--Pulls the actual data out of each store into a shorter local name therefore allowing one to write books instead of the store name i.e bookStore.books
const users= usersStore.users                       //HERE THEY ARE CALLING THE DATA EMBEDDED WITHIN THE STORES SINCE WE HAVE ALLOWED THE ADMIN.VUE COMPONENT TO IMPORT FROM BOTH STORES I.E USER.JS AND ORDERS.JS HENCE AFTER ASSIGNING OTHER NAMES USING CONST TO OUR VARIABLE WE CAN CALL IT ONCE MORE AND IT WILL FINALLY WORK
const orders= ordersStore.orders
const allOrders = Object.values(orders)/*dropstheobjectsinformofarraysformaptowork*/.map(order => { //map helps us access each nested object using Object.value and find also works as map and  runs the function once per order.
    const book = Object.values(books).find(book => book.id === order.book_id);//turns books into an array too, then .find() walks through it and returns the first book whose id matches this order's book_id. If nothing matches, .find() returns undefined.
    const user = Object.values(users).find(user => user.id === order.customer_id); //This works simillarly to the above comment i.e sources for id's if non are found then it will return the value undefined                                       both map and find work like for loops here there are data relationships between two different data sets eg order and a book also read on data modelling this takes reference to the store object id when taking referral to information
  return {      
...order,       //here we are taking raw object data i.e order from the object from the store and then .find(user => user.id) this maps to the physical object in the user store and sources the object id from that particular store therefore spilling out data from within that stores object in this case a user object 
                
    //ternary operator i.e ? is simillar or rather same as a conditional statement i.e implication of if, else if and else
    //when you are searching for it it is usually a ? then a : TO BE EXPLAINED LATER
    customer: user ? user.firstname + ' '+  user.lastname: 'Unknown User',  
    bookName: book ? book.name : 'Unknown Book',
    price: book ? book.price : '0'
    
  };
});


const tab = ref(null)
const showAddBookDialog = ref(false)
const showEditBookDialog = ref(false)
const showAddUserDialog = ref(false)
const showEditUserDialog = ref(false)
//books
//1. create models
//2. create a function to add new book
//3. create the add book form

//book models
const bookId=ref(null)
const bookName=ref(null)
const price=ref(null)
const description =ref(null)
const long_description=ref(null)                    //these are reactive data in that the values within them change in correspondance to the users inputs eg for book id if the user choses nothing it will remain blank but if an existing id is called then it will display the book appropriately
const genre=ref(null)
const image=ref(null)
const author=ref(null)  
const rating=ref(null)

//add new book
function addBook(){
    const bookData = {
        bookId: bookId.value,
        bookName: bookName.value,
        price: price.value,
        description: description.value,
        long_description: long_description.value,               //these are example of datamodels once more data is being called from the books models and this section is for calling the functions for display when reactivity comes to play
        genre: genre.value,
        image: image.value,
        author: author.value,
        rating: rating.value
    }
    //to do: update books in the store
    const updatedBook = {
        ...books,
        14: bookData
    }
}

//edit book
function editBook(book){
    bookId.value = book.id
    bookName.value = book.name
    price.value = book.price
    description.value = book.description
    long_description.value = book.long_description
    genre.value = book.genre
    image.value = book.image
    author.value = book.author
    rating.value = book.rating
    showEditBookDialog.value = true
}
function updateBook(){
     const bookData = {
        bookId: bookId.value,
        bookName: bookName.value,
        price: price.value,
        description: description.value,
        long_description: long_description.value,               //these are example of datamodels once more data is being called from the books models and this section is for calling the functions for display when reactivity comes to play so its easier instead of re-wrting stuff again
        genre: genre.value,
        image: image.value,
        author: author.value,
        rating: rating.value
    }
    //to do update book

    close()
}

//user models
const userId = ref(null)
const firstname = ref(null)              // Every single time someone loads the sign-up page fresh, firstname.value (and all the others) start back at null. There's no memory of what a previous visitor typed — each new page load creates a brand new ref(null), completely blank again.
const lastname = ref(null)
const email = ref(null)                 //these are constant variable and ref keeps track of the value in the text box and null keeps the textbox empty to allow a variety of people input their specific info i.e we dont want ppl to have a simillar name hence telling the computer to give everyone a blank value
const phone = ref(null)                   
const location = ref(null)
const address = ref(null)
const password = ref(null) 

//add user
function addUser(){                     //we are calling from the data model for users
const data ={
    userId: userId.value,
    firstname: firstname.value,
    lastname: lastname.value,                      
    email: email.value,                              
    phone: phone.value,
    location: location.value,
    address: address.value,
    password: "qwerty1234..", 
    role:2,
    }
    //to do:add user

    close()
}
//edit user
function editUser(user){
    userId.value = user.id
    firstname.value = user.firstname
    lastname.value = user.lastname
    email.value = user.email                        //here I think we are probably calling the data models for the value I think
    location.value = user.location
    address.value = user.address
    password.value = user.password
    showEditUserDialog.value = true 
}


//update user
function updateUser(){
    const data ={
    userId: userId.value,
    firstname: firstname.value,
    lastname: lastname.value,                      
    email: email.value,                              
    phone: phone.value,
    location: location.value,
    address: address.value,
    password: "qwerty1234..", //this is a fixed value so we arent inputting it as its fixed i.e in the data model close function its not being called
    role:2,
    }
    //to do: edit user

    close()
}

function close(){
//booksookd.value = null
bookName.value =null
price.value = null
description.value = null
long_description.value = null
genre.value = null
image.value = null
author.value = null
rating.value = null
showAddBookDialog.value = false                  //these are conjoined to buttons in a manner that they close the dialogue
showEditBookDialog.value = false                //this is the close function for the edit dialogue
 

    //user
    userId.value = null
    firstname.value = null
    lastname.value = null
    email.value = null
    phone.value = null
    location.value = null
    address.value = null
    password.value = null
    showAddUserDialog.value = false
    showEditUserDialog.value = false
}


</script>

<template>
    <v-container class="text-center mt-12 bg-secondary">
        <v-card>
            <v-tabs v-model="tab" align-tabs="center" color="primary" >
                <v-tab :value="1">Books</v-tab>
                <v-tab :value="2">Users</v-tab>                                 <!--creates 3 buttons which all have 3 vales and on click the values are used at takes the user to the values-->
                <v-tab :value="3">Orders</v-tab>
            </v-tabs>

            <v-tabs-window v-model="tab">                                       <!--matching content area in the page i.e within the card-->
                <!-- Books -->
                <v-tabs-window-item :value="1">                                 <!--tab-1-->
                    <div v-if="books == null||books==undefined||Object.keys(books).length == 0" align="center">
                        <v-row>
                            <v-col cols="12" md="6" sm="12" >
                                <div class="text-h6">No books found</div>
                            </v-col>
                            <v-col cols="12" md="6" sm="12" >
                                <v-btn class="ma-2" color="blue-darken-2" icon="mdi-plus" @click="showAddBookDialog = true"></v-btn>
                            </v-col>
                        </v-row>
                    </div>
                    <div v-else>
                        <v-container>
                            <v-row>
                                <v-col cols="12" md="12" sm="12" align="right">
                                    <v-btn class="ma-2" color="blue-darken-2" icon="mdi-plus" @click="showAddBookDialog = true"></v-btn>
                                </v-col>
                            </v-row>
                        <v-row>
                        <v-col>
                            <v-table class="border">
                                <thead>
                                    <tr>
                                        <th class="text-left"> Name </th>
                                        <th class="text-left"> Price </th>
                                        <th class="text-left"> Author </th>
                                        <th class="text-left"> Genre </th>
                                        <th class="text-center" colspan="3"> Action </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in books" :key="item.id" >
                                        <td>{{ item.name }}</td>
                                        <td>{{ item.price }}</td>
                                        <td>{{ item.author }}</td>
                                        <td>{{ item.genre }}</td>
                                        <td> <v-btn color="warning" size="small"><v-icon icon="mdi-eye" ></v-icon> View</v-btn> </td>
                                        <td> <v-btn color="green" size="small" @click="editBook(item)"><v-icon icon="mdi-pencil" ></v-icon> Edit</v-btn> </td>
                                        <td> <v-btn color="error" size="small"><v-icon icon="mdi-delete" ></v-icon> Delete</v-btn> </td>
                                    </tr>
                                </tbody>
                            </v-table>
                        </v-col>
                    </v-row>
                        </v-container>
                    </div>
                </v-tabs-window-item>    <!--THESE ARE JUST BASICALLY EACH TAB WINDOWS I.E THE USERS TAB AND GOING ON THE MAJOR V-TABS WITHOUT WINDOW ITEM BUNDLES THEM ALL TOGETHER IN SHORT-->
                      
                <!-- users -->
                <v-tabs-window-item :value="2">
                    <div v-if="users == null||users==undefined||Object.keys(users).length == 0" align="center">
                        <v-row>
                            <v-col cols="12" md="6" sm="12" >
                                <div class="text-h6">No users found</div>
                            </v-col>
                            <v-col cols="12" md="6" sm="12" >
                                <v-btn class="ma-2" color="blue-darken-2" icon="mdi-plus" @click="showAddUserDialog = true"></v-btn>
                            </v-col>
                        </v-row>
                    </div>
                    <div v-else>
                        <v-container>
                            <v-row>
                                <v-col cols="12" md="12" sm="12" align="right">
                                    <v-btn class="ma-2" color="blue-darken-2" icon="mdi-plus" @click="showAddUserDialog = true"></v-btn>
                                </v-col>
                            </v-row>
                        <v-row>
                        <v-col>
                            <v-table class="border">
                                <thead>
                                    <tr>
                                        <th class="text-left"> First Name </th>
                                        <th class="text-left"> Last Name </th>
                                        <th class="text-left"> Email </th>
                                        <th class="text-left"> Phone </th>
                                        <th class="text-left"> Location </th>
                                        <th class="text-left"> Address </th>
                                        <th class="text-center" colspan="3"> Action </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in users" :key="item.id" >
                                        <td>{{ item.firstname }}</td>
                                        <td>{{ item.lastname }}</td>
                                        <td>{{ item.email }}</td>
                                        <td>{{ item.phone }}</td>
                                        <td>{{ item.location }}</td>
                                        <td>{{ item.address }}</td>
                                        <td> <v-btn color="warning" size="small"><v-icon icon="mdi-eye" ></v-icon> View</v-btn> </td>
                                        <td> <v-btn color="green" size="small" @click="editUser(item)"><v-icon icon="mdi-pencil" ></v-icon> Edit</v-btn> </td>
                                        <td> <v-btn color="error" size="small"><v-icon icon="mdi-delete" ></v-icon> Delete</v-btn> </td>
                                    </tr>
                                </tbody>
                            </v-table>
                        </v-col>
                    </v-row>
                        </v-container>
                    </div>
                </v-tabs-window-item>

                <!-- orders -->
                <v-tabs-window-item :value="3">
                    <div v-if="orders == null||orders==undefined||Object.keys(orders).length == 0" align="center">
                        <v-row>
                            <v-col cols="12" md="6" sm="12" >
                                <div class="text-h6">No orders found</div>
                            </v-col>
                            <v-col cols="12" md="6" sm="12" >
                                <v-btn class="ma-2" color="blue-darken-2" icon="mdi-plus" @click="showAddcartDialog = true"></v-btn>
                            </v-col>
                        </v-row>
                    </div>
                    <div v-else>
                        <v-container>
                            <v-row>
                                <v-col cols="12" md="12" sm="12" align="right">
                                    <v-btn class="ma-2" color="blue-darken-2" icon="mdi-plus" @click="showAddcartDialog = true"></v-btn>
                                </v-col>
                            </v-row>
                        <v-row>
                        <v-col>
                            <v-table class="border">
                                <thead>
                                    <tr>
                                        <th class="text-left"> Customer </th>
                                        <th class="text-left"> Book </th>
                                        <th class="text-left"> Price </th>
                                        <th class="text-left"> Quantity </th>
                                        <th class="text-left"> Total </th>
                                        <th class="text-left"> Status </th>
                                        <th class="text-center" colspan="3"> Action </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in allOrders" :key="item.id" >
                                        <td>{{ item.customer }}</td>
                                        <td>{{ item.book }}</td>
                                        <td>{{ item.price }}</td>
                                        <td>{{ item.quantity }}</td>
                                        <td>{{ item.total_paid }}</td>
                                        <td>{{ item.status }}</td>
                                        <td> <v-btn color="warning" size="small"><v-icon icon="mdi-eye" ></v-icon> View</v-btn> </td>
                                        <td> <v-btn color="green" size="small" @click="editUser(item)"><v-icon icon="mdi-pencil" ></v-icon> Edit</v-btn> </td>
                                        <td> <v-btn color="error" size="small"><v-icon icon="mdi-delete" ></v-icon> Delete</v-btn> </td>
                                    </tr>
                                </tbody>
                            </v-table>
                        </v-col>
                    </v-row>
                        </v-container>
                    </div>
                </v-tabs-window-item>
            </v-tabs-window>
            
        </v-card>
    </v-container>

    <!--dialogs-->
    <!--Book dialog-->
    <!--Add Book-->
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


     <!--Edit Book-->
     <v-dialog v-model="showEditBookDialog" max-width="600">
        <v-form @submit.prevent >
            <v-card>
                <v-card-title class="pa-6">                         
                <v-row>
                        Edit Book
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
                    <v-btn color="primary"  text="Update" variant="tonal" @click="updateBook()" ></v-btn>
                </v-card-actions>
            </v-card>
        </v-form>
    </v-dialog>
    <!--User Dialogs-->
     <!-- Add User -->
    <v-dialog v-model="showAddUserDialog" max-width="600">
        <v-card>
            <v-card-title class="pa-6">
            <v-row>
                    Add User
                    <v-spacer></v-spacer>
                    <v-btn class="ma-2" color="blue-darken-2" icon="mdi-close" @click="close();"></v-btn>
                </v-row>
            </v-card-title>
            <v-card-text>
                <v-row>
                    <v-col md="6">
                        <v-text-field label="First Name" v-model="firstname"></v-text-field>
                    </v-col>
                    <v-col md="6">
                        <v-text-field label="Last Name" v-model="lastname"></v-text-field>
                    </v-col>
                </v-row>
                
                    <v-row>
                    <v-col md="6">
                        <v-text-field label="Email" v-model="email"></v-text-field>
                    </v-col>
                    <v-col md="6">
                        <v-text-field label="254722345678" v-model="phone"></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="6">
                        <v-select v-model="location" label="Location" :items="['CBD', 'Madaraka', 'Westlands', 'Buruburu']" variant="outlined" ></v-select>
                    </v-col>
                    <v-col md="6">
                            <v-text-field label="Address" v-model="address"></v-text-field>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text="Close" variant="plain" @click="close()" ></v-btn>
                <v-btn color="primary"  text="Save" variant="tonal" @click="addUser()" ></v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>


      <!--Edit User-->
    <v-dialog v-model="showEditUserDialog" max-width="600">
        <v-card>
            <v-card-title class="pa-6">
            <v-row>
                    Edit User
                    <v-spacer></v-spacer>
                    <v-btn class="ma-2" color="blue-darken-2" icon="mdi-close" @click="close();"></v-btn>
                </v-row>
            </v-card-title>
            <v-card-text>
                <v-row>
                    <v-col md="6">
                        <v-text-field label="First Name" v-model="firstname"></v-text-field>
                    </v-col>
                    <v-col md="6">
                        <v-text-field label="Last Name" v-model="lastname"></v-text-field>
                    </v-col>
                </v-row>
                
                    <v-row>
                    <v-col md="6">
                        <v-text-field label="Email" v-model="email"></v-text-field>
                    </v-col>
                    <v-col md="6">
                        <v-text-field label="254722345678" v-model="phone"></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="6">
                        <v-select v-model="location" label="Location" :items="['CBD', 'Madaraka', 'Westlands', 'Buruburu']" variant="outlined" ></v-select>
                    </v-col>
                    <v-col md="6">
                            <v-text-field label="Address" v-model="address"></v-text-field>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text="Close" variant="plain" @click="close()" ></v-btn>
                <v-btn color="primary"  text="update" variant="tonal" @click="updateUser()" ></v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>

</template>

<style scoped>
.orders-header {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  margin: 1.5rem 0;
}
.orders-title {
  font-size: 1.6rem;
  font-weight: 700;
}
.orders-subtitle {
  color: #5f6c8d;
}
.orders-summary {
  margin-bottom: 1.5rem;
}
.summary-card {
  padding: 1.5rem;
  border-radius: 16px;
  background: #ffffff;
}
.summary-label {
  color: #6b7280;
  margin-bottom: .5rem;
}
.summary-value {
  font-size: 2rem;
  font-weight: 700;
}
.order-empty {
  display: flex;
  justify-content: center;
  padding: 2rem 0;
}
.order-empty-card {
  max-width: 560px;
  margin: 0 auto;
  text-align: center;
  background: rgba(255,255,255,.95);
}
.orders-table-sheet {
  padding: 1rem;
}
.orders-table th,
.orders-table td {
  padding: 1rem 0.75rem;
}
.orders-table thead th {
  color: #334155;
  font-weight: 700;
  border-bottom: 1px solid #e2e8f0;
}
.orders-table tbody tr:nth-child(odd) {
  background: rgba(15, 23, 42, 0.03);
}
.orders-table td {
  color: #475569;
}

.admin-header{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:1rem 1.25rem;
    gap:1rem;
}
.admin-header{background:linear-gradient(90deg,#f8fafc, #f1f5f9);border-bottom:1px solid #e6eef8;border-radius:8px 8px 0 0}
.admin-title .text-h5{font-weight:700}
.admin-controls{display:flex;align-items:center;gap:.5rem}
.book-card{overflow:hidden}
.book-image{background:#f3f4f6}
.book-title{font-size:1rem;font-weight:700}
.book-author{color:#64748b;font-size:.9rem}
.book-meta{display:flex;justify-content:space-between;align-items:center;padding:0 1rem 1rem}
.book-price{font-weight:700}
.user-card{padding:0.5rem}
.user-meta{color:#6b7280;font-size:.85rem;margin-top:.25rem}
.v-card:hover{transform:translateY(-6px);box-shadow:0 6px 18px rgba(15,23,42,0.08);transition:all .16s ease}
.book-card{border-radius:12px}
.user-card{border-radius:12px}
</style>