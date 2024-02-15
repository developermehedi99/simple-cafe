const Blog = ({ blog }) => {
  const {
    title,
    cover,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;

  return (
    <div className="w-2/3 mb-10">
      <img className="w-full" src={cover} alt="" />
      <div className="flex justify-between my-2 w-full">
        <div className="flex gap-2">
          <img className="w-12" src={author_img} alt="" />
          <div>
            <h3>{author}</h3>
            <p>{posted_date}</p>
          </div>
          <div>
            <p>{reading_time} min read</p>
          </div>
        </div>
      </div>
      <h1 className="text-3xl">{title}</h1>
      <p>
        {hashtags.map((hash, index) => (
          <span className="flex" key={index}>
            <a href=""> #{hash}</a>
          </span>
        ))}
      </p>
    </div>
  );
};

export default Blog;
