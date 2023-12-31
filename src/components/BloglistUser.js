import { Link } from "react-router-dom";
import HTMLReactParser from "html-react-parser";
import { AiFillEye } from "react-icons/ai";

const Bloglist = ({ blogs }) => {
  return (
    <>
      {blogs.map((blog) => (
        <div className="card1" key={blog._id}>
          <Link to={`/blogsUser/${blog._id}`}>
            <img src={blog.image} alt="image" />
            <div className="category-date">
              <div className="category">{blog.category}</div>
              <div className="views">
                <AiFillEye className="icon-view" />
                Views: {blog.views}
              </div>
              <div className="date">{blog.createdAt.substring(0, 10)}</div>
            </div>
            <div className="author">
              {blog.author.firstname.charAt(0).toUpperCase() +
                blog.author.firstname.slice(1)}
            </div>
            <div className="title">{blog.title}</div>
            <div className="card-content">
              <p>
                {blog &&
                  HTMLReactParser(
                    blog.description ? blog.description.substring(0, 80) : ""
                  )}
                ...
              </p>
            </div>
            <div className="view-post">
              <Link to={`/blogsUser/${blog._id}`}>View post</Link>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Bloglist;
