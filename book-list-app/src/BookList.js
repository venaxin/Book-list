import React from "react";
import "./BookList.css";
function Booklist() {
  const books = [
    {
      title: "Armada",
      author: "Ernest Cline",
      genre: "Sci-Fi",
    },
    {
      title: "Alchemist",
      author: "Santa Claus",
      genre: "Fiction",
    },
    {
      title: "batman",
      author: "Deez Clips",
      genre: "Fiction",
    },
    {
      title: "Concept of Physics",
      author: "RD Sharma",
      genre: "Educational",
    },
  ];
  return (
    <div>
      <h1>Book Shelf</h1>
      <div className="Board">
        <ul>
          {/* map is used to iterate over the array*/}
          {books.map((book, index) => (
            <li key={index}>
              <h3>Title: {book.title}</h3>
              <p>Author: {book.author}</p>
              <p>Genre: {book.genre}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Booklist;
