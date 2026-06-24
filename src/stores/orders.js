import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useOrderStore = defineStore('orders',  {
   state: () => {
        const orders= {
            0:{
                id: 1,
                customer_id: 2,
                book_id: 4,
                quantity: 1,
                total_paid: 2400,
                status: "processing"

            },
              1:{
                id: 2,
                customer_id: 2,
                book_id: 6,
                quantity: 1,
                total_paid: 1800,
                status: "fulfilled"

            },
              2:{
                id: 3,
                customer_id: 3,
                book_id: 1,
                quantity: 1,
                total_paid: 1200,
                status: "processing"

            },
              3:{
                id: 4,
                customer_id: 4,
                book_id: 4,
                quantity: 1,
                total_paid: 1600,
                status: "fulfilled"

            },
              4:{
                id: 5,
                customer_id: 5,
                book_id: 2,
                quantity: 1,
                total_paid: 1700,
                status: "processing"

            },
              5:{
                id: 6,
                customer_id: 6,
                book_id: 3,
                quantity: 1,
                total_paid: 1800,
                status: "fulfilled"

            },
        }

        return{
            orders
        }
   },
   actions:{

       }
})