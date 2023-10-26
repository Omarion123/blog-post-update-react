import { Link } from "react-router-dom";
const Bloglist = ({ blogs }) => {
  return (
    <>
      {blogs.map((blog) => (
        <div className="card1" key={blog._id}>
          <Link to={`/blogs/${blog._id}`}>
            <img src={blog.image} alt="image" />
            <div className="category-date">
              <div className="category">{blog.category}</div>
              {/* <div className="date">{blog.createdAt}</div> */}
              <div className="date">{blog.createdAt.substring(0, 10)}</div>
            </div>
            {/* <div className="author">{blog.author[0].firstname}</div> */}
            <div className="author">{blog.author.firstname}</div>
            <div className="title">{blog.title}</div>
            <div className="card-content">
              <p>
                {blog && blog.description
                  ? blog.description.substring(0, 90)
                  : ""}
                ...
              </p>
            </div>
            <div className="view-post">
              <Link to={`/blogs/${blog._id}`}>View post</Link>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Bloglist;
