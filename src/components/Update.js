import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
const Update = () => {
  const { _id } = useParams();
  console.log(_id);
  const {
    data: blog,
    isPending,
    error,
  } = useFetch(`https://lastlast.onrender.com/api/post/one/${_id}`);
  return (
    <div className="update">
      <h1>Updated</h1>
      {isPending && <div>Loading....</div>}
      {error && <div>{error}</div>}
      {blog && (
        <>
          <form>
            <label>image</label>
            <input type="image" value={blog.title} />
            <br></br>
            <label>title</label>
            <input type="image" value={blog.title} />
            <br></br>
            <label>category</label>
            <input type="image" value={blog.category} />
            <br></br>
            <label>header</label>
            <input type="image" value={blog.header} />
            <br></br>
            <label>description</label>
            <input type="image" value={blog.description} />
            <br></br>
            <br></br>
            <button type="submit">submit</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Update;
