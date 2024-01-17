import { useState } from "react";
import bookImg from "./../assets/book.png";
import BookCard from "./BookCard";
import Header from "./Header";

const Books = () => {
  const booksItem = [
    {
      id: 1,
      name: "JavaScript and Jquery",
      image: `${bookImg}`,
      writer: "Jon Duckett",
      price: "$62",
      year: "2023",
      isFavorite: false,
    },
    {
      id: 2,
      name: "JavaScript and Jquery",
      image: `${bookImg}`,
      writer: "Jon Duckett",
      price: "$62",
      year: "2020",
      isFavorite: false,
    },
    {
      id: 3,
      name: "JavaScript and Jquery",
      image: `${bookImg}`,
      writer: "Jon Duckett",
      price: "$62",
      year: "2018",
      isFavorite: false,
    },
    {
      id: 4,
      name: "JavaScript and Jquery",
      image: `${bookImg}`,
      writer: "Jon Duckett",
      price: "$62",
      year: "2016",
      isFavorite: false,
    },
    {
      id: 5,
      name: "JavaScript and Jquery",
      image: `${bookImg}`,
      writer: "Jon Duckett",
      price: "$62",
      year: "2022",
      isFavorite: false,
    },
    {
      id: 6,
      name: "JavaScript and Jquery",
      image: `${bookImg}`,
      writer: "Jon Duckett",
      price: "$62",
      year: "2010",
      isFavorite: false,
    },
    {
      id: 7,
      name: "JavaScript and Jquery",
      image: `${bookImg}`,
      writer: "Jon Duckett",
      price: "$62",
      year: "2012",
      isFavorite: false,
    },
    {
      id: 8,
      name: "JavaScript and Jquery",
      image: `${bookImg}`,
      writer: "Jon Duckett",
      price: "$62",
      year: "2014",
      isFavorite: false,
    },
  ];

  const [books, setBooks] = useState(booksItem);
  const handleGetSearch = (searchValue) => {
    const filteredBooks = books.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setBooks(filteredBooks);
  };

  return (
    <>
      <Header handleGetSearch={handleGetSearch}></Header>
      <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {books.map((book) => (
          <BookCard key={book.id} book={book}></BookCard>
        ))}
      </div>
    </>
  );
};

export default Books;
