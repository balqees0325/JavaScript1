'use strict';
const books = [
   {
    title: 'The 5Am Club',
    author: 'Robin Sharma',
    alreadyRead: true,
  },
   {
    title: 'Mastery',
    author: 'Robert Greene',
    alreadyRead: false,
  },
   {
    title: 'Clean Code',
    author: 'Robert C Martin',
    alreadyRead: false,
  }
]
books.forEach(book =>{
console.log(`${book.title} by ${book.author}`);

if(book.alreadyRead === true) {
  console.log(`You already read ${book.title}`);
} else {
  console.log(`You still need to read ${book.title}`)
}
})
