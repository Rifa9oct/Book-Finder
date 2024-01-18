import { useState } from "react";
import book1 from "./../assets/book1.png";
import book2 from "./../assets/book2.png";
import book4 from "./../assets/book4.png";
import book5 from "./../assets/book5.png";
import book6 from "./../assets/book6.png";
import book7 from "./../assets/book7.png";
import book8 from "./../assets/book8.png";
import BookCard from "./BookCard";
import Header from "./Header";

const Books = () => {
  const booksItem = [
    {
      id: 1,
      name: "Python and JavaScript (2023)",
      image: `${book1}`,
      writer: "Alex Inversion",
      price: "$62",
      year: 2023,
      isFavorite: false,
    },
    {
      id: 2,
      name: "Interview Mastery (2020)",
      image: `${book2}`,
      writer: "Jonathan Middaugh",
      price: "$62",
      year: 2020,
      isFavorite: false,
    },
    {
      id: 3,
      name: "JavaScript and Jquery (2018)",
      image: `${book6}`,
      writer: "Jon Duckett",
      price: "$62",
      year: 2018,
      isFavorite: false,
    },
    {
      id: 4,
      name: "Object Oriented (2016)",
      image: `${book4}`,
      writer: "Nicholas C. Zakas",
      price: "$62",
      year: 2016,
      isFavorite: false,
    },
    {
      id: 5,
      name: "Data Structure (2022)",
      image: `${book5}`,
      writer: "Adrian Mejia",
      price: "$62",
      year: 2022,
      isFavorite: false,
    },
    {
      id: 6,
      name: "JavaScript and Jquery (2018)",
      image: `${book6}`,
      writer: "Jon Duckett",
      price: "$62",
      year: 2018,
      isFavorite: false,
    },
    {
      id: 7,
      name: "Learn JavaScript (2012)",
      image: `${book7}`,
      writer: "Lvelin Demirov",
      price: "$62",
      year: 2012,
      isFavorite: false,
    },
    {
      id: 8,
      name: "React Enterprise (2014)",
      image: `${book8}`,
      writer: "Thomas Findlay",
      price: "$62",
      year: 2014,
      isFavorite: false,
    },
  ];

  const [books, setBooks] = useState(booksItem);

  //Implement Search Feature
  const handleGetSearch = (searchValue) => {
    const filteredBooks = books.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setBooks(filteredBooks);
  };

  //Implement Sort Feature
  const handleSort = (sortValue) => {
    let sortedBooks;

    if (sortValue === "year_asc") {
      sortedBooks = [...books].sort((a, b) => a.year - b.year);
    } else if (sortValue === "year_desc") {
      sortedBooks = [...books].sort((a, b) => b.year - a.year);
    } else if (sortValue === "name_asc") {
      sortedBooks = [...books].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortValue === "name_desc") {
      sortedBooks = [...books].sort((a, b) => b.name.localeCompare(a.name));
    }
    setBooks(sortedBooks);
  };

  const handleIsFavorite = (bookId) => {
    const favourite = books.map((book) => {
      if (book.id === bookId) {
        return {...book, isFavorite: !book.isFavorite };
      } else {
        return book;
      }
    });
    setBooks(favourite);
  };

  return (
    <>
      <Header
        handleGetSearch={handleGetSearch}
        handleSort={handleSort}
      ></Header>
      <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            handleIsFavorite={handleIsFavorite}
          ></BookCard>
        ))}
      </div>
    </>
  );
};

export default Books;
