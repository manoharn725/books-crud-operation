import { useState } from "react";
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/use-books-context";

function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);
  const { handleDeleteBookById } = useBooksContext();
  
  const handleDeleteClick = () => {
    handleDeleteBookById(book.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = ()=>{
    setShowEdit(false)
    
  }

  let content = (
    <h3>
      {" "}
      id:{book.id}, BookName:{book.title}
    </h3>
  );
  if (showEdit) {
    content = <BookEdit onSubmit={handleSubmit} book={book} />;
  }

  return (
    <div className="book-show">
      <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
      {content}
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          X
        </button>
      </div>
    </div>
  );
}
export default BookShow;
