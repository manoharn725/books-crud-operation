import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const { handleEditBookById } = useBooksContext();

  const handleEditChange = (event) => {
    event.preventDefault();
    setTitle(event.target.value);
  };

  const handleEditSubmit = (event) => {
    event.preventDefault();
    onSubmit();
    handleEditBookById(book.id, title);
    console.log("the new title", title);
  };

  return (
    <div className="book-edit">
      <h5>Title</h5>
      <form onSubmit={handleEditSubmit}>
        <input className="input" value={title} onChange={handleEditChange} />
        <button className="button is-primary">Save</button>
      </form>
    </div>
  );
}
export default BookEdit;
