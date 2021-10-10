// import library components
import React from 'react'
import ReactDOM from "react-dom"
// import css
import "./index.css";
// import books data
import {books} from "./books";
// import Book component
import Book from "./Book";


function BookList() {
  return (
    <div className="booklist">
      {Books}
    </div>
  )
}

const Books = books.map((book) => {
  return <Book key={book.id} {...book}/>
});

ReactDOM.render(
  <BookList />,
  document.getElementById("root")
)