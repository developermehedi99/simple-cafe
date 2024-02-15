import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Header from "./components/Header";
import BookMarks from "./components/bookMark/BookMarks";

function App() {
  const [booksMarks, setBooksMarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookMarks = (blog) => {
    const newBookMarks = [...booksMarks, blog];
    setBooksMarks(newBookMarks);
  };

  const handleTime = (id, time) => {
    setReadingTime(readingTime + time);
    // console.log("remove bookmark", id);

    const remaning = booksMarks.filter((books) => books.id !== id);
    // setBooksMarks(remaning);
  };

  return (
    <div className="p-3 max-w-6xl mx-auto">
      <Header></Header>
      <div className="md:flex">
        <Blogs
          handleBookMarks={handleBookMarks}
          handleTime={handleTime}
        ></Blogs>
        <BookMarks
          readingTime={readingTime}
          booksMarks={booksMarks}
        ></BookMarks>
      </div>
    </div>
  );
}

export default App;
