const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// destructuring

// const books = getBook(2)
// const title = books.title;
// title;
// const author = books.author
// author;
/*
const book = getBook(3)
book;

const { title, author, publicationDate, pages, genres, hasMovieAdaptation } = getBook(2)
title
author
publicationDate
pages
genres
hasMovieAdaptation

// destructuring and the Rest Operator          
const [primaryGenre, secondaryGenre, ...otherGenre] = genres
console.log(`1st:${primaryGenre} 2nd:${secondaryGenre} 3rd: ${otherGenre}`)

// The spread Opertator
const newGenre = [...genres, "Sci-fi"]
newGenre

// the spread operator on the object
const updatedBook = {
  ...book,
  // Adding a new property to the object
  moviePublicationDate: "2001-12-19",
  // updating or changing or overwriting the property
  pages: 1210
}
updatedBook

// Arrow functions 
const dateUpdate = (str) => str.split("-")[0];
console.log(dateUpdate(publicationDate));

// Template literals 
const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${dateUpdate(publicationDate)}. The books has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie`

summary;

// Ternaries - revised {Replacing if-elese statments }
const pagesRange = pages > 1000 ? "Over a thousand" : "Less than the thousand";
pagesRange;
console.log(`The book has ${pagesRange} pages`)

// Short Circuiting And logical Operators &&,||,??

console.log(true && "Some string")
console.log(hasMovieAdaptation && "This book has a movie ") 

// falsy: 0, '', null and undefined 
console.log('Navjot' && 'some string')
console.log(0 && "some string ") // Example of the falsy value

// The OR operator - short-circuit on true 
console.log(true || "some string")
console.log(false || "Some string")

console.log(book.translations.spanish)

const spanishTranslation = book.translations.spanish || "Not Translated"
spanishTranslation;

// consequences
// console.log(book.reviews.librarything.reviewsCount)

// const countWrong = book.reviews.librarything.reviewsCount ||  "No Data"
// countWrong;


// const count  = book.reviews.librarything.reviewsCount ?? "No data"
// count;

// optional Chaning

function getTotalReviewCount(){
const goodreads = book.reviews.goodreads.reviewsCount;
const librarything = book.reviews.librarything?.reviewsCount ?? null;
return goodreads + librarything;
}

console.log(getTotalReviewCount(book)) */

// Map Array method 

/*
const books = getBooks();
books;
console.log(books[1].title)

let x =[1,2,3,4,5].map((s) => s* 2)
console.log(x)

const titles = books.map((book)=> book.title)
titles

function getTotalReviewCount(data1){
  const goodreads = data1.reviews.goodreads.reviewsCount;
  const librarything = data1.reviews.librarything?.reviewsCount ?? null;
  return goodreads + librarything;
  }
  

const essentialData = books.map((book) => ({
  title : book.title,
  author: book.author,
  reviewsCount:getTotalReviewCount(book),
}));

essentialData;

// Filter array method 
const longBooks = books.filter((book) =>book.pages > 500).filter((book) => book.hasMovieAdaptation)
longBooks

const adventureBooks = books.filter(book => book.genres.includes('adventure')).map(book => book.title)
adventureBooks

// Reduce array method - goes iteration by iteration 
const pagesAllBooks = books.reduce((sum, book) => book.pages + sum, 0)
pagesAllBooks;

//  sort array method 
const y = [3,4,6,2,8];
const sorted = y.slice().sort((a,b) => a-b);
sorted
y;

const sortedByPages = books.slice().sort((a, b) => a.pages - b.pages).map(book => book.pages)
sortedByPages;

// add, delete and update arrays 

// add a book object to the array
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling"
}
const booksAfterAdd = [...books, newBook]
booksAfterAdd

// Delete a book from the array
const booksAfterDelete = booksAfterAdd.filter(book => book.id !== 3)
booksAfterDelete;

// Update the object in the array

const booksAfterUpdate = booksAfterDelete.map(book => book.id === 1 ? {...book, pages:3000} : book)
booksAfterUpdate */
