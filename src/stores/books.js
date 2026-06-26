import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useBooksStore = defineStore('books', {
  state: () => {
    const books = [
      {
        id: 1,
        image: 'Bestseller1.jpg',
        name: 'The Picture of Dorian Grey',
        price: 2000,
        description: 'A classic portrait tale',
        author: 'Arthur Gray',
        long_description: "A young girl witnesses racial injustice unfold through her lawyer father's landmark court case.",
        genre: 'Classic',
        rating: 4.5,
      },
      {
        id: 2,
        image: 'Bestseller2.jpg',
        name: 'Own Your Everyday',
        price: 1800,
        description: 'Treat your day like never before',
        author: 'Rachel Hollins',
        long_description: "Practical ideas to improve daily life.",
        genre: 'Self Help',
        rating: 5,
      },
      {
        id: 3,
        image: 'Bestseller3.jpg',
        name: 'How Innovation Works',
        price: 1500,
        description: 'Build your innovations',
        author: 'Luther King',
        long_description: "Insights into how new ideas scale into products.",
        genre: 'Business',
        rating: 4,
      },
      {
        id: 4,
        image: 'Bestseller4.jpg',
        name: 'The Psychology of Money',
        price: 1200,
        description: 'How money works',
        author: 'Ramsey Muli',
        long_description: "Practical financial psychology and decisions.",
        genre: 'Finance',
        rating: 4.5,
      },
      {
        id: 5,
        image: 'Bestseller5.jpg',
        name: 'Your Soul is a River',
        price: 1300,
        description: 'Taking care of your soul',
        author: 'Alex Baena',
        long_description: 'Guidance for spiritual growth.',
        genre: 'Spirituality',
        rating: 4.2,
      },
      {
        id: 6,
        image: 'Bestseller6.jpg',
        name: 'The Fine Print',
        price: 1400,
        description: 'Dreamland Billionaires',
        author: 'Lauren Asher',
        long_description: 'A sweeping modern history.',
        genre: 'Non-fiction',
        rating: 4.3,
      },
      {
        id: 7,
        image: 'Bestseller7.jpg',
        name: 'Company of One',
        price: 1500,
        description: 'Why staying small is the next big thing',
        author: 'Paul Jarvis',
        long_description: 'A practical guide to small-business success.',
        genre: 'Business',
        rating: 4.6,
      },
      {
        id: 8,
        image: 'Bestseller8.jpg',
        name: 'How to Stop Worrying and Start Living',
        price: 1600,
        description: 'Practical life advice',
        author: 'Dale Carnegie',
        long_description: 'Time-tested advice to reduce worry and improve life.',
        genre: 'Self Help',
        rating: 4.8,
      },
      {
        id: 9,
        image: 'Bestseller9.jpg',
        name: 'Goal Planner',
        price: 1700,
        description: 'Planning your goals',
        author: 'Silah Ntiririka',
        long_description: 'Tools and templates to plan and achieve goals.',
        genre: 'Self Help',
        rating: 4.7,
      },
      {
        id: 10,
        image: 'Bestseller10.jpg',
        name: 'Zero to One',
        price: 1800,
        description: 'How to build a future',
        author: 'Peter Thiel',
        long_description: 'Insights on startups and innovation.',
        genre: 'Business',
        rating: 4.9,
      },
      {
        id: 11,
        image: 'Bestseller11.jpg',
        name: 'All the Letters I Should Have Sent',
        price: 1900,
        description: 'Personal essays and letters',
        author: 'Ranial Burn',
        long_description: 'A heartfelt collection.',
        genre: 'Memoir',
        rating: 4.1,
      },
      {
        id: 12,
        image: 'Bestseller12.jpg',
        name: 'The Fine Print (2)',
        price: 1200,
        description: 'Dreamland Billionaires',
        author: 'Lauren Asher',
        long_description: 'A different edition with alternate content.',
        genre: 'Non-fiction',
        rating: 3.9,
      },
      {
        id: 13,
        image: 'Bestseller13.jpg',
        name: 'The Subtle Art of Not Giving a F*ck',
        price: 2000,
        description: 'A counterintuitive approach to living a good life',
        author: 'Mark Manson',
        long_description: 'Self-help with a blunt tone.',
        genre: 'Self Help',
        rating: 4.2,
      },
      {
        id: 14,
        image: 'Bestseller14.jpg',
        name: 'The Two Towers',
        price: 2400,
        description: 'The lord of the kings',
        author: 'J.R.R. Tolkien',
        long_description: 'Second volume of an epic fantasy trilogy.',
        genre: 'Fantasy',
        rating: 4.8,
      },
    ]

    const selectedBook = ref(null)

    return {
      books,
      selectedBook,
    }
  },
  actions: {
    updateSelectedBook(payload) {
      this.selectedBook = payload
    },
     				addBook(payload) {
            const existingKeys = Object.keys(this.books).map(Number);
            const maxKey = existingKeys.length > 0 ? Math.max(...existingKeys) : 0;
            const nextKey = maxKey + 1;

            this.books[nextKey] = {
                ...payload,
                id: nextKey
            };
        },
        edit(id, payload) {
            const book = Object.entries(this.books).find(
                ([key, item]) => item.id === id
            );

            if (!book) {
                console.error(`No book found with id: ${id}`);
                return;
            }

            const [objectKey] = book;

            this.books[objectKey] = {
                ...this.books[objectKey], 
                ...payload
            };
        },
        deleteBook(id) {
            const book = Object.entries(this.books).find(
                ([key, item]) => item.id === id
            );
            if (!book) {
                console.error(`Cannot delete: No book found id: ${id}`);
                return;
            }

            const [objectKey] = book;

            delete this.books[objectKey];
        }
  },
})