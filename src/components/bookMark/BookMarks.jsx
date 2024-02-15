import Book from "./Book";

const BookMarks = ({ booksMarks, readingTime }) => {
  return (
    <div className="w-1/3 bg-slate-400 p-5 rounded-md">
      <h2 className="text-2xl font-bold mb-4">
        spent time on reading:{readingTime} min
      </h2>
      <h1 className="text-2xl font-semibold mb-3">
        Book marks : {booksMarks.length}
      </h1>
      {booksMarks.map((book, index) => (
        <Book key={index} book={book}></Book>
      ))}
    </div>
  );
};

export default BookMarks;
