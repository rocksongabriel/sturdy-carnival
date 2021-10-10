import React from "react";


const Book = ({title, author, img}) => {
  const clickMeHandler = (the_title) => {
    alert(`Book: ${the_title}`)
  }

  const anotherButtonHandler = (e) => {
    alert("This is an alert");
    console.log(e);
    console.log(e.target);
  }

  return (
    <article className="book" onMouseOver={() => {console.log(author)}}>
      <img 
        src={img}
        alt="Image of Book"
      />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button onClick={() => clickMeHandler(title)}>Click Me</button>
      <button type="button" onClick={anotherButtonHandler}>Another button</button>
    </article>
  )
}

export default Book;