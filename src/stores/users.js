import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users', {
    state: () => ({
        users: {
            0: {
                id: 1,
                firstname: "Ramsey",
                lastname: "Muli",
                email: "Ramseymuli17@gmail.com",
                phone: "0798984789",
                location: "Nairobi",
                address: "123, Lihilu",
            },
            1: {
                id: 1,
                firstname: "Chantel",
                lastname: "Mutheu",
                email: "xoxo@gmail.com",
                phone: "07989842456",
                location: "kiambu",
                address: "123, streetview",
            },
            2: {
                id: 1,
                firstname: "Grace",
                lastname: "kioko",
                email: "Crace@gmail.com",
                phone: "0798984734",
                location: "Nairobi",
                address: "pebbles",
            },
            3: {
                id: 1,
                firstname: "Florence",
                lastname: "Muinde",
                email: "florence20@gmail.com",
                phone: "0798984712",
                location: "kiambu",
                address: "123, warehouse",
            },
            4: {
                id: 1,
                firstname: "Silah",
                lastname: "Arabella",
                email: "Silah237@gmail.com",
                phone: "0798984709",
                location: "kisumu",
                address: "Kitengela234",
            },
            5: {
                id: 1,
                firstname: "Spacious",
                lastname: "Muheu",
                email: "Ronaldo7@gmail.com",
                phone: "0798984234",
                location: "Syoikimau",
                address: "katani",
            },
        },
    }),
    actions: {},
    persist: true,
})