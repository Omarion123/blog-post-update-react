const Bloglist = ({ blogs }) => {
  return (
    <>
      {blogs.map((blog) => (
        <div className="card1" key={blog.id}>
          <img src={blog.image} alt="image" />
          <div className="category-date">
            <div className="category">{blog.category}</div>
            <div className="date">{blog.date}</div>
          </div>
          <div className="author">{blog.author}</div>
          <div className="title">{blog.title}</div>
          <div className="card-content">
            <p>{blog.content}</p>
          </div>
          <div className="view-post">View post</div>
        </div>
      ))}
    </>
  );
};

export default Bloglist;
