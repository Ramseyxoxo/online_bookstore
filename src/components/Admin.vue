<script setup>
import { ref, computed } from 'vue'
import { useBooksStore } from '../stores/books'
import { useUsersStore } from '../stores/users'
import { useOrderStore } from '../stores/orders'

const booksStore = useBooksStore()
const usersStore = useUsersStore()
const orderStore = useOrderStore()

const allOrders = Object.values(orders).map(order => { //maps helps to access each nested object using Object.value
    const book = Object.values(books).find(book => book.id === order.book_id);
    const user = Object.values(users).find(user => user.id === order.customer_id);
  return {
    ...order,

    // ?: tenary operator is the same as a conditional statement
    customer: user ? user.firstname + ' '+  user.lastname: 'Unknown User',
    bookName: book ? book.name : 'Unknown Book',
    price: book ? book.price : '0'
    
  };
});

const books = computed(() => Object.values(booksStore.books || {}))
const users = computed(() => Object.values(usersStore.users || {}))
const orders = computed(() => Object.values(orderStore.orders || {}))


const tab = ref(1)

</script>

<template>
    <v-container class="text-center mt-12 bg-secondary">
        <v-card>
            <v-tabs v-model="tab" align-tabs="center" color="primary" >
                <v-tab :value="1">Books</v-tab>
                <v-tab :value="2">Users</v-tab>
                <v-tab :value="3">Orders</v-tab>
            </v-tabs>
            <v-tabs-window v-model="tab">
                <!-- Books -->
                <v-tabs-window-item :value="1">
                    <div v-if="!books || books.length === 0" align="center">
                        <v-row>
                            <v-col cols="12" md="6" sm="12">
                                <div class="text-h6">No books found</div>
                            </v-col>
                            <v-col cols="12" md="6" sm="12">
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
                                                <th class="text-left"> Name </th>
                                                <th class="text-left"> Price </th>
                                                <th class="text-left"> Author </th>
                                                <th class="text-left"> Genre </th>
                                                <th class="text-center" colspan="3"> Action </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="item in books" :key="item.id">
                                                <td>{{ item.name }}</td>
                                                <td>{{ item.price }}</td>
                                                <td>{{ item.author }}</td>
                                                <td>{{ item.genre }}</td>
                                                <td><v-btn color="warning" size="small"><v-icon icon="mdi-eye"></v-icon> View</v-btn></td>
                                                <td><v-btn color="blue" size="small" @click="editBook(item)"><v-icon icon="mdi-pencil"></v-icon> Edit</v-btn></td>
                                                <td><v-btn color="error" size="small"><v-icon icon="mdi-delete"></v-icon> Delete</v-btn></td>
                                            </tr>
                                        </tbody>
                                    </v-table>
                                </v-col>
                            </v-row>
                        </v-container>
                    </div>
                </v-tabs-window-item>

                <!-- Users -->
                <v-tabs-window-item :value="2">
                    <div v-if="!users || users.length === 0" align="center">
                        <v-row>
                            <v-col cols="12" md="6" sm="12">
                                <div class="text-h6">No users found</div>
                            </v-col>
                            <v-col cols="12" md="6" sm="12">
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
                                                <th class="text-left"> Address</th>
                                                <th class="text-center" colspan="3"> Action </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="item in users" :key="item.id">
                                                <td>{{ item.firstname }}</td>
                                                <td>{{ item.lastname }}</td>
                                                <td>{{ item.email }}</td>
                                                <td>{{ item.phone }}</td>
                                                <td>{{ item.location }}</td>
                                                <td>{{ item.address }}</td>
                                                <td><v-btn color="warning" size="small"><v-icon icon="mdi-eye"></v-icon> View</v-btn></td>
                                                <td><v-btn color="primary" size="small" @click="editBook(item)"><v-icon icon="mdi-pencil"></v-icon> Edit</v-btn></td>
                                                <td><v-btn color="error" size="small"><v-icon icon="mdi-delete"></v-icon> Delete</v-btn></td>
                                            </tr>
                                        </tbody>
                                    </v-table>
                                </v-col>
                            </v-row>
                        </v-container>
                    </div>
                </v-tabs-window-item>

                <!-- Orders -->
                <v-tabs-window-item :value="3">
                    <div class="orders-header">
                        <div>
                            <div class="orders-title">Order Dashboard</div>
                            <div class="orders-subtitle">Review the latest order activity and status.</div>
                        </div>
                        <div class="orders-actions">
                            <v-btn color="primary" class="ma-2" rounded elevation="1" @click="showAddUserDialog = true">
                                <v-icon left>mdi-plus</v-icon>
                                New Order
                            </v-btn>
                        </div>
                    </div>

                    <v-row class="orders-summary" dense>
                        <v-col cols="12" md="4" v-for="item in [{label:'Total Orders', value: orders.length},{label:'Pending', value: orders.filter(o => o.status === 'Pending').length},{label:'Completed', value: orders.filter(o => o.status === 'Completed').length}]" :key="item.label">
                            <v-sheet class="summary-card" elevation="2">
                                <div class="summary-label">{{ item.label }}</div>
                                <div class="summary-value">{{ item.value }}</div>
                            </v-sheet>
                        </v-col>
                    </v-row>

                    <div v-if="!orders || orders.length === 0" class="order-empty">
                        <v-card class="order-empty-card" flat>
                            <v-card-text>
                                <v-icon size="48" color="primary">mdi-cart-off</v-icon>
                                <div class="text-h5 mt-4">No orders yet</div>
                                <div class="text-subtitle-1 text-muted">Your order list will appear here once customers place purchases.</div>
                                <v-btn color="primary" class="mt-6" rounded @click="showAddUserDialog = true">Create first order</v-btn>
                            </v-card-text>
                        </v-card>
                    </div>

                    <div v-else>
                        <v-container class="orders-table-container" fluid>
                            <v-row>
                                <v-col cols="12">
                                    <v-sheet elevation="1" rounded class="orders-table-sheet">
                                        <v-table class="orders-table">
                                            <thead>
                                                <tr>
                                                    <th>Customer</th>
                                                    <th>Book</th>
                                                    <th>Price</th>
                                                    <th>Quantity</th>
                                                    <th>Total</th>
                                                    <th>Status</th>
                                                    <th class="text-center">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="item in allOrders" :key="item.id">
                                                    <td>{{ item.customer }}</td>
                                                    <td>{{ item.book }}</td>
                                                    <td>{{ item.price }}</td>
                                                    <td>{{ item.quantity }}</td>
                                                    <td>{{ item.total }}</td>
                                                    <td><v-chip :color="item.status === 'Completed' ? 'green' : item.status === 'Pending' ? 'orange' : 'blue'" small>{{ item.status }}</v-chip></td>
                                                    <td class="text-center">
                                                        <v-btn icon small color="primary"><v-icon>mdi-eye</v-icon></v-btn>
                                                        <v-btn icon small color="warning"><v-icon>mdi-pencil</v-icon></v-btn>
                                                        <v-btn icon small color="error"><v-icon>mdi-delete</v-icon></v-btn>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </v-table>
                                    </v-sheet>
                                </v-col>
                            </v-row>
                        </v-container>
                    </div>
                </v-tabs-window-item>
            </v-tabs-window>
        </v-card>
    </v-container>
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
</style>