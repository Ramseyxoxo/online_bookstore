import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useBooksStore = defineStore('books',  {
   state: () => {
      const books = {
       0: {
        id:1,
          image: "Bestseller1.jpg",
          name: "The Picture of Dorian Grey",
          price: 2000,
          description: "How money works",
          author: "Arther Gray",
          long_description: "A young girl witnesses racial injustice unfold through her lawyer father's landmark court case.",
          genre: "Science Fiction",
          rating: 4.5
        },
       2: {
        id:2,
          image: "Bestseller2.jpg",
          name: "Own Your Everyday",
          price: 1800,
          description: "Treat your day like never before",
          author: "Rachel Hollins",
          long_description: "A desert planet holds the universe's most valuable resource, sparking an epic interstellar power struggle.",
          genre: "Fantasy",
          rating: 5
        },
       3: {
        id:3,
          image: "Bestseller3.jpg",
          name: "How Innovation Works",
          price: 1500,
          description: "Build your innovations",
          author: "Luther King",
          long_description: "A family's winter hotel caretaking job turns deadly as the father slowly loses his mind.",
          genre: "Horror",
          rating: 6
        },
       4: {
        id:4,
          image: "Bestseller4.jpg",
          name: "The Psychology of Money",
          price: 1200,
          description: "How money works",
          author: "Ramsey Muli",
          long_description: "Elizabeth Bennet navigates love, class, and wit against the proud yet captivating Mr. Darcy.",
          genre: "Mystery",
          rating: 2.5
        },
       5: {
        id:5,
          image: "Bestseller5.jpg",
          name: "Your Soul is a river",
          price: 1300,
          description: "Taking care of your Soul",
          author: "Alex Baena",
          long_description: "Building your foundation in Christ",
          genre: "Horror",
          rating: 10
        },
      6:  {
        id:6,
          image: "Bestseller6.jpg",
          name: "The fine Print",
          price: 1400,
          description: "Dreamland Billionares",
          author: "Lauren Asher",
          long_description: "A sweeping history of how Homo sapiens came to dominate and reshape the entire world.",
          genre: "Romance",
          rating: 8.5
        },
      7:  {
        id:17,
          image: "Bestseller7.jpg",
          name: "Company of One",
          price: 1500,
          description: "Why staying small is the next big thing in Busineess",
          author: "Paul Jarvis",
          long_description: "An orphan boy discovers he is a wizard and enrolls in a magical boarding school.",
          genre: "Historical fiction",
          rating: 7
        },
      8:  {
        id:8,
          image: "Bestseller8.jpg",
          name: "How to stop worring and Start living ",
          price: 1600,
          description: "How to win friends and influence people",
          author: "Dale Carnegie",
          long_description: "A murder inside the Louvre unlocks ancient religious secrets that powerful forces desperately want buried.",
          genre: "Literary Fiction",
          rating: 8
        },
      9:  {
        id:9,
          image: "Bestseller9.jpg",
          name: "Goal Planner",
          price: 1700,
          description: "Planning your own goals",
          author: "Silah Ntiririka",
          long_description: "A wife's disappearance on her anniversary reveals dark, twisted secrets within a troubled marriage",
          genre: "Self help",
          rating: 10
        },
      10:  {
        id:10,
          image: "Bestseller10.jpg",
          name: "Zero to One",
          price: 1800,
          description: "How to build a future",
          author: "Peter Thiel",
          long_description: "A shepherd boy journeys across deserts pursuing his dream, discovering life's deepest treasures along the way.",
          genre: "Memoir",
          rating: 9.5
        },
      11:  {
        id:11,
          image: "Bestseller11.jpg",
          name: "All the letters I should have sent",
          price: 1900,
          description: "I could do it before",
          author: "Ranial Burn",
          long_description: "Small daily habits, consistently practiced, can transform your life in surprisingly powerful and lasting ways.",
          genre: "Adventure",
          rating: 4.3
        },
      12:  {
        id:12,
          image: "Bestseller12.jpg",
          name: "The fine print",
          price: 1200,
          description: "Dreamland Billionares",
          author: "Lauren Asher",
          long_description: "Michelle Obama shares her remarkable journey from Chicago's South Side to the White House.",
          genre: "Dystopian",
          rating: 2.0
        },
       13: {
        id:13,
          image: "Bestseller13.jpg",
          name: "The subtle Art of not giving a f*ck",
          price: 2000,
          description: "A counterintuitive approach to living a good life",
          author: "Mark Manison",
          long_description: "Ancient Chinese military wisdom that applies timeless strategic thinking to conflict, leadership, and everyday life.",
          genre: "Romance",
          rating: 6.5
        },
       14: {
        id:14,
          image: "Bestseller14.jpg",
          name: "The Two Towers",
          price: 2400,
          description: "The lord of the Kings",
          author: "J.R.R. Tolkion",
          long_description: "A Transylvanian count arrives in England, spreading vampiric terror through the lives of unsuspecting victims.",
          genre: "Money making",
          rating: 8.0
        }
    };
       const selectedBook = ref(null)

       return{
           books,
           selectedBook
       }
   },
   actions:{
       updateSelectedBook (payload) {
           this.selectedBook = payload
       },
   },
   persist: true,
})