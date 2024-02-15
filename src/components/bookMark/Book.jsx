const Book = ({ book }) => {
  const { title } = book;
  return (
    <div>
      <h1 className="bg-slate-300 m-3 p-5 rounded-md">{title}</h1>
    </div>
  );
};

export default Book;
