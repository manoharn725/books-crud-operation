import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookCreate() {

  const [title, setTitle] = useState('');
  const { handleCreateBook } = useBooksContext();
  
  const handleChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleCreateBook(title);
    console.log(title);
    setTitle('');
  };
  
  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange} />
        <input className="button" type="submit" value="Submit"/>
      </form>
    </div>
  );
}

export default BookCreate;