import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./postsSlice";

export const App = () => {
  const { posts, loading, error, errorMessage } = useSelector(
    (state) => state.posts
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      {error && <p>{errorMessage}</p>}
      {posts &&
        posts.map((post) => (
          <li key={post.id} className="post-list">
            <p className="post-title">{post.title}</p>
            <div className="post-body">{post.body}</div>
          </li>
        ))}
    </>
  );
};
