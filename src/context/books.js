import { createContext, useState, useCallback } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
  
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/books");

    setBooks(response.data);
  },[]);
 
  const handleEditBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });
    const updatedEditedBook = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updatedEditedBook);
  };

  const handleDeleteBookById = async (id) => {
    const response = await axios.delete(`http://localhost:3001/books/${id}`)
    console.log(response);
    const updatedDeletedBooks = books.filter((book) => {
      return id !== book.id;
    });
    setBooks(updatedDeletedBooks);
  };

  const handleCreateBook = async (title) => {
    // console.log("Need to add book with:", title);
    const response = await axios.post("http://localhost:3001/books", {
      title: title,
    });
    // console.log(response);
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const valueToShare = {
    books: books,
    handleEditBookById: handleEditBookById,
    handleDeleteBookById: handleDeleteBookById,
    handleCreateBook: handleCreateBook,
    fetchBooks: fetchBooks
    //if key is identical to the value then we can write it once.
  }
  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider }//named export
export default BooksContext;//default export

//if we want to import both at a time then we can
//import BooksContext, {Provider} from './sdf' 