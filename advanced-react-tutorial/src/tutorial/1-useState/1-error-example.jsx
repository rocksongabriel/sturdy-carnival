import React from "react"


const ErrorExample = () => {
  let title = "Simple Title";
  const handleClick = () => {
    title = "Complex Title";
    console.log(title);
  }

  return (
    <React.Fragment>
      <h1>{title}</h1>

      <button type="button" className="btn" onClick={handleClick}> Change Title </button>
    </React.Fragment>
  )
}

export default ErrorExample;

/*
We wanted to change the title from 'Simple Title' to 'Complex Title' when the button is clicked. But as you can see, this functionality is not working. And this is why we need to use the useState hook.

*/