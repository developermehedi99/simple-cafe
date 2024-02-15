import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Header from "./components/Header";
import BookMarks from "./components/bookMark/BookMarks";

function App() {
  return (
    <div className="p-3 mx-10">
      <Header></Header>
      <div className="md:flex">
        <Blogs></Blogs>
        <BookMarks></BookMarks>
      </div>
    </div>
  );
}

export default App;
